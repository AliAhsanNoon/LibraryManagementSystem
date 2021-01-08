using LMS.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Implementation
{
    public class UnitOfWork : IUnitOfWork
    {
        private LMSDBContext context;
        private BookRepository bookRepository;
        public UnitOfWork(LMSDBContext _context)
        {
            this.context = _context;
        }
        public BookRepository BookRepository { get => this.bookRepository ?? (this.bookRepository = new BookRepository(this.context)); }

        public Task<int> commitChanges()
        {
            throw new NotImplementedException();
        }
    }
}
