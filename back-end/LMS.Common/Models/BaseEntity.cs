using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Common.Models
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public bool IsDeleted { get; set; }

    }
}
