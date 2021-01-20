using LMS.Common.Models;
using LMS.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Implementation
{
    public class BookRepository : BaseRepository<Books>, IBookRepository
    {
        private LMSDBContext dbContext;
        public BookRepository(LMSDBContext context):base(context)
        { 
            this.dbContext = context;
        }

        public async Task<List<Books>> GetBooksDetailsAsync()
        {
            return await this.dbContext.Books
                .Where(x => x.IsDeleted == false)
                .Include(cat => cat.Category)
                .Include(author => author.Author)
                .ToListAsync();
        }

        public async Task<Books> SoftDeleteBookAsync(Books book)
        {
            var entity = await this.dbContext.Books.FindAsync(book.Id);
            if (entity != null)
            {
                entity.IsDeleted = book.IsDeleted;
                this.dbContext.Entry(entity).State = EntityState.Modified;
                await this.dbContext.SaveChangesAsync();
            }
            return entity;
        }
    }
}
