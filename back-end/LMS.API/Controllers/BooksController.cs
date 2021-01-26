using LMS.Common.Models;
using LMS.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private IUnitOfWork work;
        public BooksController(IUnitOfWork work)
        {
            this.work = work; 
        }

        [HttpGet]
        [Route("BooksList")]
        public async Task<List<Books>> GetBooksAsync()
        {
            var booksList = await this.work.BookRepository.GetBooksDetailsAsync();
            return booksList;
        }
        [HttpGet]
        [Route("BookById/{id}")]
        public async Task<Books> GetBookByIdAsync(int Id)
        {
            var book = await this.work.BookRepository.GetRecordByIdAsync(Id);
            return book;
        }

        [HttpPost]
        [Route("SaveBook")]
        public async Task<Books> AddBookAsync(Books book)
        {
            var bookx = await this.work.BookRepository.CreateRecordAsync(book);
            return book;
        }

        [HttpPut]
        [Route("UpdateBook")]
        public async Task<bool> UpdateBookAsync(Books book)
        {
            var bookx = await this.work.BookRepository.UpdateRecordAsync(book);
            return bookx;
        }

        [HttpPatch]
        [Route("DeleteBook")]
        public async Task<Books> DeleteBookAsync(Books book)
        {
            //var bookx = await this.work.BookRepository.DeleteByIdAsync(bookId.Id);
            var bookx = await this.work.BookRepository.SoftDeleteBookAsync(book);
            return bookx;
        }
    }
}
