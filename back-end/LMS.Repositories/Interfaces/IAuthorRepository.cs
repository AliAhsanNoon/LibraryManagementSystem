using LMS.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Interfaces
{
    public interface IAuthorRepository
    {
        public Task<List<Author>> GetAuthorsDetailsAsync();
    }
}
