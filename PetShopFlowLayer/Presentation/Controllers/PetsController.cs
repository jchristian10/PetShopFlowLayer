using PetShopFlowLayer.Services;
using PetShopFlowLayer.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PetShopFlowLayer.Presentation.Controllers {

    [Authorize]
    public class PetsController : ApiController {

        private PetService _service;

        public PetsController(PetService service) {
            _service = service;
        }

        public IList<PetDTO> Get() {
            return _service.List(User.Identity.Name);
        }

        public IHttpActionResult Get(int id) {
            var pet = _service.FindById(id, User.Identity.Name);

            if (pet != null) {
                return Ok(pet);
            }

            return Unauthorized();
        }
    }
}
