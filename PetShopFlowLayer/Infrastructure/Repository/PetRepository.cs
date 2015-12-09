using CoderCamps.Infrastructure.Repository;
using PetShopFlowLayer.Domain.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PetShopFlowLayer.Infrastructure.Repository {
    public class PetRepository : GenericRepository<Pet> {

        public PetRepository(DbContext db) : base(db) { }

        protected override IQueryable<Pet> Include(IQueryable<Pet> query) {
            return query.Include(p => p.Owner);
        }

        public IList<Pet> FindByOwner(string username) {
            return (from p in Table
                    where p.Owner.UserName == username
                    select p).ToList();
        }

        public Pet FindById(int id, string username) {
            return (from p in Table
                    where p.Id == id && p.Owner.UserName == username
                    select p).FirstOrDefault();
        }
    }
}