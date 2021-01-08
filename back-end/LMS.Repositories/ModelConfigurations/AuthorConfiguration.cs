using LMS.Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LMS.Repositories.ModelConfigurations
{
    class AuthorConfiguration : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.AuthorName).HasMaxLength(100);
            builder.Property(x => x.EmailAddress).HasMaxLength(100);
            builder.Property(x => x.PhoneNo).HasMaxLength(7);
            builder.Property(x => x.City).HasMaxLength(100);
            builder.Property(x => x.ResidenceAddress).HasMaxLength(100);
            builder.Property(x => x.DOB);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        }
    }
}
