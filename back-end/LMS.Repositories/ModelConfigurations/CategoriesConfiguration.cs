using LMS.Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LMS.Repositories.ModelConfigurations
{
    class CategoriesConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
            builder.Property(x => x.CategoryName).HasMaxLength(50);

            builder.HasMany(x => x.BooksList)
                .WithOne(x => x.Category)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
