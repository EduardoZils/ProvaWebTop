using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Animal
    {
        public Animal()
        {
            Vacina = new HashSet<Vacina>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; }

        public ICollection<Vacina> Vacina { get; set; }
    }
}
