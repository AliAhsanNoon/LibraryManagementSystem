using LMS.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Interfaces
{
    public interface IBookRepository
    {
        Task<List<Books>> GetBooksDetailsAsync();
        Task<Books> SoftDeleteBookAsync(Books book);
    }
}
