var PetShopFlowLayer;
(function (PetShopFlowLayer) {
    var Controllers;
    (function (Controllers) {
        var DetailsController = (function () {
            function DetailsController($http, $routeParams) {
                var _this = this;
                this.$http = $http;
                this.$routeParams = $routeParams;
                $http.get("/api/pets/" + $routeParams.id)
                    .then(function (response) {
                    _this.pet = response.data;
                })
                    .catch(function (response) {
                    console.log(response);
                });
            }
            return DetailsController;
        })();
        Controllers.DetailsController = DetailsController;
    })(Controllers = PetShopFlowLayer.Controllers || (PetShopFlowLayer.Controllers = {}));
})(PetShopFlowLayer || (PetShopFlowLayer = {}));
//# sourceMappingURL=detailsController.js.map