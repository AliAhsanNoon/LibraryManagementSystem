using LMS.Common.Models;
using LMS.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Repositories.Implementation
{
    public class AuthorRepository : BaseRepository<Author>,IAuthorRepository
    {
        private LMSDBContext dbContext;
        public AuthorRepository(LMSDBContext context):base(context)
        {
            this.dbContext = context;
        }
    }
}
