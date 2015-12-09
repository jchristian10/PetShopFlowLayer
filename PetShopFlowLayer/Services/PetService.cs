using PetShopFlowLayer.Domain.Models;
using PetShopFlowLayer.Infrastructure.Repository;
using PetShopFlowLayer.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PetShopFlowLayer.Services {
    public class PetService {

        private PetRepository _repo;

        public PetService(PetRepository repo) {
            _repo = repo;
        }

        public IList<PetDTO> List(string username) {
            return _repo.FindByOwner(username).Select(p => Map(p)).ToList();
        }

        public PetDTO FindById(int id, string username) {
            return Map(_repo.FindById(id, username));
        }

        private PetDTO Map(Pet dbPet) {
            return dbPet != null ? new PetDTO() {
                Id = dbPet.Id,
                Name = dbPet.Name,
                Species = dbPet.Species,
                Owner = dbPet.Owner?.UserName,
                ImageUrl = dbPet.ImageUrl
            } : null;
        }
    }
}