var PetShopFlowLayer;
(function (PetShopFlowLayer) {
    var Controllers;
    (function (Controllers) {
        var ListController = (function () {
            function ListController($http) {
                var _this = this;
                this.$http = $http;
                $http.get('/api/pets')
                    .then(function (response) {
                    _this.pets = response.data;
                });
            }
            return ListController;
        })();
        Controllers.ListController = ListController;
    })(Controllers = PetShopFlowLayer.Controllers || (PetShopFlowLayer.Controllers = {}));
})(PetShopFlowLayer || (PetShopFlowLayer = {}));
//# sourceMappingURL=listController.js.map