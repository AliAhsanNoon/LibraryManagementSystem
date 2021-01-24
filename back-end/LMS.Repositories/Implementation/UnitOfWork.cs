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
        private BookRepository _bookRepository;
        private AuthorRepository _authorRepository;
        private CategoryRepository _categoryRepository;
        public UnitOfWork(LMSDBContext _context)
        {
            this.context = _context;
        }
        public BookRepository BookRepository { get => this._bookRepository ?? (this._bookRepository = new BookRepository(this.context)); }
        public AuthorRepository AuthorRepository { get => this._authorRepository ?? (this._authorRepository = new AuthorRepository(this.context)); }
        public CategoryRepository CategoryRepository { get => this._categoryRepository ?? (this._categoryRepository = new CategoryRepository(this.context)); }

        public Task<int> commitChanges()
        {
            throw new NotImplementedException();
        }
    }
}
