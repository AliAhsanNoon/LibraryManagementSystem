using LMS.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Interfaces
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetCategoriesDetailsAsync();
        Task<Category> SoftDeleteCategoryAsync(Category category);
    }
}
