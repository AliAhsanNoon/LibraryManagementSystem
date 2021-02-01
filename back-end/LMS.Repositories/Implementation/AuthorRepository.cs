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
    public class AuthorRepository : BaseRepository<Author>,IAuthorRepository
    {
        private LMSDBContext dbContext;
        public AuthorRepository(LMSDBContext context):base(context)
        {
            this.dbContext = context;
        }

        public async Task<List<Author>> GetAuthorsDetailsAsync()
        {
            return await this.dbContext.Authors.Where(del => del.IsDeleted == false).Include(books => books.BooksList).ToListAsync();
        }

        public async Task<Author> SoftDeleteBookAsync(Author author)
        {
            var entity = await this.dbContext.Authors.FindAsync(author.Id);
            if (entity != null)
            {
                entity.IsDeleted = author.IsDeleted;
                this.dbContext.Entry(entity).State = EntityState.Modified;
                await this.dbContext.SaveChangesAsync();
            }
            return entity;
        }
    }
}
