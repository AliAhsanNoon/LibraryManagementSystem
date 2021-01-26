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
    public class CategoryRepository: BaseRepository<Category>, ICategoryRepository
    {
        private LMSDBContext dbContext;
        public CategoryRepository(LMSDBContext context) : base(context)
        {
            this.dbContext = context;
        }

        public async Task<List<Category>> GetCategoriesDetailsAsync()
        {
            return await this.dbContext.Categories.Where(c => c.IsDeleted == false).ToListAsync();
        }

        public async  Task<Category> SoftDeleteCategoryAsync(Category category)
        {
            var entity = await this.dbContext.Categories.FindAsync(category.Id);
            if (entity != null)
            {
                entity.IsDeleted = category.IsDeleted;
                this.dbContext.Entry(entity).State = EntityState.Modified;
                await this.dbContext.SaveChangesAsync();
                
            }
            return entity;
        }
    }
}
