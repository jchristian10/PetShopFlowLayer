namespace PetShopFlowLayer.Controllers {

    import Pet = PetShopFlowLayer.Models.Pet;

    export class DetailsController {

        public pet: Pet;

        constructor(private $http, private $routeParams) {

            $http.get(`/api/pets/${$routeParams.id}`)
                .then((response) => {
                    this.pet = response.data;
                })
                .catch((response) => {
                    console.log(response);
                });
        }
    }
}