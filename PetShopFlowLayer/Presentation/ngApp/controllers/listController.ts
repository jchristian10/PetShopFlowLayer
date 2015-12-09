namespace PetShopFlowLayer.Controllers {

    import Pet = PetShopFlowLayer.Models.Pet;

    export class ListController {

        public pets: Pet[];

        constructor(private $http) {
            $http.get('/api/pets')
                .then((response) => {
                    this.pets = response.data;
                });
        }
    }
}