using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Common.Models
{
    public class Category : BaseEntity
    {
        public string CategoryName { get; set; }
        public List<Books> BooksList { get; set; }
    }
}
