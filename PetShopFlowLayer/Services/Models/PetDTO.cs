using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PetShopFlowLayer.Services.Models {
    public class PetDTO {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Species { get; set; }

        public string Owner { get; set; }

        public string ImageUrl { get; set; }
    }
}