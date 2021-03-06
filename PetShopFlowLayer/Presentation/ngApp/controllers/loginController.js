var PetShopFlowLayer;
(function (PetShopFlowLayer) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController($http, $window, $location) {
                this.$http = $http;
                this.$window = $window;
                this.$location = $location;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                var data = "grant_type=password&username=" + this.username + "&password=" + this.password;
                this.$http.post('/token', data, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .then(function (response) {
                    _this.$window.localStorage.setItem('token', response.data['access_token']);
                    _this.$location.path('/');
                })
                    .catch(function (response) {
                    _this.loginMessage = 'Invalid username or password';
                });
            };
            LoginController.prototype.logout = function () {
                this.$window.localStorage.removeItem('token');
                this.$location.path('/login');
            };
            LoginController.prototype.isLoggedIn = function () {
                return this.$window.localStorage.getItem('token');
            };
            return LoginController;
        })();
        Controllers.LoginController = LoginController;
        angular.module("PetShopFlowLayer").controller("authController", LoginController);
    })(Controllers = PetShopFlowLayer.Controllers || (PetShopFlowLayer.Controllers = {}));
})(PetShopFlowLayer || (PetShopFlowLayer = {}));
//# sourceMappingURL=loginController.js.map