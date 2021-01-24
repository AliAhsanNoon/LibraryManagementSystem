using LMS.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Repositories.Implementation
{
    public class CategoryRepository: BaseRepository<Category>
    {
        private LMSDBContext dbContext;
        public CategoryRepository(LMSDBContext context) : base(context)
        {
            this.dbContext = context;
        }
    }
}
