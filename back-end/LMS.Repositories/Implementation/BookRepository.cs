using LMS.Common.Models;
using LMS.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Implementation
{
    public class BookRepository : BaseRepository<Books>, IBookRepository
    {
        private LMSDBContext ctx;
        public BookRepository(LMSDBContext context):base(context)
        { 
            this.ctx = context;
        }

        public async Task<List<Books>> GetBooksDetailsAsync()
        {
            return await this.ctx.Books.Include(cat => cat.Category).Include(author => author.Author).ToListAsync();
        }

        public async Task<Books> SoftDeleteBookAsync(Books book)
        {
            var entity = await this.ctx.Books.FindAsync(book.Id);
            if (entity != null)
            {
                entity.IsDeleted = book.IsDeleted;
                this.ctx.Entry(entity).State = EntityState.Modified;
                await this.ctx.SaveChangesAsync();
            }
            return entity;
        }
    }
}
