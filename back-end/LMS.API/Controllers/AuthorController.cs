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

        [HttpGet]
        [Route("AuthorList")]
        public async Task<List<Author>> GetAuthorsAsync()
        {
            var authorsList = await this.work.AuthorRepository.GetAuthorsDetailsAsync();
            return authorsList;
        }
        [HttpGet]
        [Route("AuthorById/{id}")]
        public async Task<Author> GetBookByIdAsync(int Id)
        {
            var author = await this.work.AuthorRepository.GetRecordByIdAsync(Id);
            return author;
        }
        [HttpPost]
        [Route("SaveAuthor")]
        public async Task<Author> SaveAuthorsAsync(Author author)
        {
            var entity = await this.work.AuthorRepository.CreateRecordAsync(author);
            return entity;
        }
        [HttpPut]

        [Route("UpdateAuthor")]
        public async Task<bool> UpdateAuthorsAsync(Author author)
        {
            var entity = await this.work.AuthorRepository.UpdateRecordAsync(author);
            return entity;
        }

        [Route("DeleteAuthor")]
        [HttpPatch]
        public async Task<Author> DeleteAuthorsAsync( Author author)
        {
            var authors = await this.work.AuthorRepository.SoftDeleteBookAsync(author);
            return authors;
        }
    }
}
