using LMS.Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LMS.Repositories.ModelConfigurations
{
    class BookConfiguration : IEntityTypeConfiguration<Books>
    {
        public void Configure(EntityTypeBuilder<Books> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.BookTitle).HasMaxLength(100).IsRequired(true);
            builder.Property(x => x.Price);
            builder.Property(x => x.Qty).IsRequired(true);
            builder.Property(x => x.BookDescription).HasMaxLength(500);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);

            builder.HasOne(x => x.Category)
                .WithMany(x => x.BooksList)
                .HasForeignKey(x => x.CategoryId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Author)
                .WithMany(x => x.BooksList)
                .HasForeignKey(x => x.AuthorId)
                .HasConstraintName("FK_AuthorId")
                .OnDelete(DeleteBehavior.Cascade);
            
        }
    }
}
