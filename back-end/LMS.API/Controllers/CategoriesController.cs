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
    }
}
