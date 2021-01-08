using LMS.Common.Models;
using LMS.Repositories.ModelConfigurations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace LMS.Repositories
{
    public class LMSDBContext : DbContext
    {
        public LMSDBContext(DbContextOptions options) : base(options)   {}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BookConfiguration());
            modelBuilder.ApplyConfiguration(new CategoriesConfiguration());
            modelBuilder.ApplyConfiguration(new AuthorConfiguration());
        }
        public DbSet<Books> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
