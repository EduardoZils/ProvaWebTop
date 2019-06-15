using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Mapping
{
    public class AnimalMap : IEntityTypeConfiguration<Animal>
    {
        public void Configure(EntityTypeBuilder<Animal> entity)
        {
            entity.ToTable("animal");

            entity.Property(e => e.Id)
                .HasColumnName("id")
                .ValueGeneratedNever();

            entity.Property(e => e.Descricao)
                .IsRequired()
                .HasColumnName("descricao")
                .HasMaxLength(100);
        }
    }
}
