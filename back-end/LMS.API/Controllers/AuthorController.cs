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
    public class AuthorController : ControllerBase
    {
        private IUnitOfWork work;
        public AuthorController(IUnitOfWork work)
        {
            this.work = work;
        }
        [Route("AuthorList")]
        public async Task<List<Author>> GetAuthorsAsync()
        {
            var authorsList = await this.work.AuthorRepository.GetAllRecordsAsync();
            return authorsList;
        }
    }
}
