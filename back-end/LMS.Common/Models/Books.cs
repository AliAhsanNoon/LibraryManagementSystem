using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Common.Models
{
    public class Books : BaseEntity
    {
        public string BookTitle { get; set; }
        public double Price { get; set; }
        public int Qty { get; set; }
        public string BookDescription { get; set; }

        public int? CategoryId { get; set; }
        public Category Category { get; set; }

        public int AuthorId { get; set; }
        public Author Author { get; set; }
    }
}
