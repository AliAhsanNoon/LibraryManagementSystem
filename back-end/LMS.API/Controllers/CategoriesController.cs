using LMS.Common.Models;
using LMS.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private IUnitOfWork work;
        public CategoriesController(IUnitOfWork work)
        {
            this.work = work;
        }

        [HttpGet]
        [Route("CategoriesList")]
        public async Task<List<Category>> GetCategoriessAsync()
        {
            var categoriesList = await this.work.CategoryRepository.GetAllRecordsAsync();
            return categoriesList;
        }
        [HttpGet]
        [Route("CategoryById/{id}")]
        public async Task<Category> GetBookByIdAsync(int Id)
        {
            var category = await this.work.CategoryRepository.GetRecordByIdAsync(Id);
            return category;
        }

        [HttpPost]
        [Route("SaveCategory")]
        public async Task<Category> AddBookAsync(Category _category)
        {
            var category = await this.work.CategoryRepository.CreateRecordAsync(_category);
            return category;
        }

        [HttpPut]
        [Route("UpdateBook")]
        public async Task<bool> UpdateBookAsync(Category _category)
        {
            var category = await this.work.CategoryRepository.UpdateRecordAsync(_category);
            return category;
        }

        [HttpPatch]
        [Route("DeleteCategory")]
        public async Task<Category> DeleteBookAsync(Category _category)
        {
            //var bookx = await this.work.BookRepository.DeleteByIdAsync(bookId.Id);
            var category = await this.work.CategoryRepository.SoftDeleteBookAsync(_category);
            return category;
        }
    }
}
