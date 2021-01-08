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
        Task<int> commitChanges();
    }
}
