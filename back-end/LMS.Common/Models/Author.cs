using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Common.Models
{
    public class Author : BaseEntity
    {
        public string AuthorName { get; set; }
        public DateTime DOB { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNo { get; set; }
        public string City { get; set; }
        public string ResidenceAddress { get; set; }
        public List<Books> BooksList { get; set; }
    }
}
