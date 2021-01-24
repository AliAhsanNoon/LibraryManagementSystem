using LMS.Repositories.Implementation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Interfaces
{
    public interface IUnitOfWork
    {
        public BookRepository BookRepository { get; }
        public AuthorRepository AuthorRepository { get; }
        public CategoryRepository CategoryRepository { get; }
        Task<int> commitChanges();
    }
}
