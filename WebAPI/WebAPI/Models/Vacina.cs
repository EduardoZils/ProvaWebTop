using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Vacina
    {
        public int IdVacina { get; set; }
        public DateTime? DtVacina { get; set; }
        public double Peso { get; set; }
        public double Dosagem { get; set; }
        public string Aplicador { get; set; }
        public string DescMedicamento { get; set; }
        public int Id { get; set; }

        public Animal IdNavigation { get; set; }
    }
}
