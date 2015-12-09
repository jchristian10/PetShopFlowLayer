using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PetShopFlowLayer.Domain.Models {
    public class Pet {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Species { get; set; }

        public ApplicationUser Owner { get; set; }

        public string ImageUrl { get; set; }
    }
}