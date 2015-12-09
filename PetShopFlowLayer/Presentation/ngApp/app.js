var PetShopFlowLayer;
(function (PetShopFlowLayer) {
    angular.module("PetShopFlowLayer", ['ngRoute']);
    angular.module('PetShopFlowLayer').factory('authInterceptor', function ($q, $window, $location) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = "Bearer " + token;
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        };
    });
    angular.module('PetShopFlowLayer')
        .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/presentation/ngApp/views/list.html',
            controller: PetShopFlowLayer.Controllers.ListController,
            controllerAs: 'list'
        })
            .when('/details/:id', {
            templateUrl: '/presentation/ngApp/views/details.html',
            controller: PetShopFlowLayer.Controllers.DetailsController,
            controllerAs: 'details'
        })
            .when('/login', {
            templateUrl: '/presentation/ngApp/views/login.html',
            controller: PetShopFlowLayer.Controllers.LoginController,
            controllerAs: 'login'
        });
        $httpProvider.interceptors.push('authInterceptor');
    });
})(PetShopFlowLayer || (PetShopFlowLayer = {}));
//# sourceMappingURL=app.js.map