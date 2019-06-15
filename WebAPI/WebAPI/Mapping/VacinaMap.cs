using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Mapping
{
    public class VacinaMap : IEntityTypeConfiguration<Vacina>
    {
        public void Configure(EntityTypeBuilder<Vacina> entity)
        {
            entity.HasKey(e => e.IdVacina);

            entity.ToTable("vacina");

            entity.Property(e => e.IdVacina)
                .HasColumnName("id_vacina")
                .ValueGeneratedNever();

            entity.Property(e => e.Aplicador)
                .IsRequired()
                .HasColumnName("aplicador")
                .HasMaxLength(120);

            entity.Property(e => e.DescMedicamento)
                .IsRequired()
                .HasColumnName("desc_medicamento")
                .HasMaxLength(300);

            entity.Property(e => e.Dosagem).HasColumnName("dosagem");

            entity.Property(e => e.DtVacina)
                .HasColumnName("dt_vacina")
                .HasColumnType("date");

            entity.Property(e => e.Id).HasColumnName("id");

            entity.Property(e => e.Peso).HasColumnName("peso");

            entity.HasOne(d => d.IdNavigation)
                .WithMany(p => p.Vacina)
                .HasForeignKey(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("animal_vacina_fk");
        }
    }
}
