var app = angular.module("Home", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: "HomeCtrl"
        })
        .when('/login', {
            templateUrl: 'giris.html',
            controller: "HomeCtrl"
        })
        .when('/register', {
            templateUrl: 'uye.html',
            controller: "HomeCtrl"
        })
        .when('/haber', {
            templateUrl: 'haber.html',
            controller: "HomeCtrl"
        })
        .when('/hakkimizda', {
            templateUrl: 'hakkimizda.html',
            controller: "HomeCtrl"
        })
        .when('/duyuru', {
            templateUrl: 'duyuru.html',
            controller: "HomeCtrl"
        })
        .when('/yorum', {
            templateUrl: 'yorum.html',
            controller: "HomeCtrl"
        });
});
app.controller("HomeCtrl", function($scope) {
    console.log("In Home Controller..."); // for test my angulan its work or not 
    $scope.kullanci = 0;
    $scope.zyaretci = 1;
    $scope.message = "";
    $scope.yeniEkle = {};
    $scope.secilen = {};

    /**
     * users FUNCTIONS
     */
    $scope.Kullanciler = [
        { username: "mohammad", fullName: "mohammad. al mahamid", email: "mhx@hotmail.com", password: "123asd" },
        { username: "ali", fullName: "ali veli", email: "ali@hotmail.com", password: "123asd" },
        { username: "ahmad", fullName: "ahmad karam", email: "ahmad@hotmail.com", password: "123asd" }
    ];
    $scope.KullanciKaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.Kullanciler.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni haber eklendi  ";
    };
    $scope.KullanciSec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.KullanciGuncelle = function() {
        $scope.message = "basarila  haber guncellendi";
    };
    $scope.KullanciSil = function(eleman) {
        $scope.haberler.splice($scope.Kullanciler.indexOf($scope.secilen), 1);
        $scope.message = "basarila  haber silindi ";
    };
    /**
     * Haberler
     */
    $scope.haberler = [
        { baslik: "mohammad", icerik: "des ahmad  1  ", tarih: "12-02-2010" },
        { baslik: "ali", icerik: "des ali 1 2  ", tarih: "12-02-2012" },
        { baslik: "asad", icerik: "des asad 1 2 3 ", tarih: "12-02-2014" }
    ];
    $scope.HaberKaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.haberler.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni haber eklendi  ";
    };
    $scope.HaberSec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.HaberGuncelle = function() {
        $scope.message = "basarila  haber guncellendi";
    };
    $scope.HaberSil = function(eleman) {
        $scope.haberler.splice($scope.haberler.indexOf($scope.secilen), 1);
        $scope.message = "basarila  haber silindi ";
    };
    /**
     * DUYURULAR
     */
    $scope.duyurular = [
        { baslik: "duyurular mohammad", icerik: "des ahmad  1 2 3 4 5 ", tarih: "12-02-2010" },
        { baslik: "duyurular ali", icerik: "des ali 1 2 3 4 5 ", tarih: "12-02-2012" },
        { baslik: "duyurular asad", icerik: "des asad 1 2 3 4 5 ", tarih: "12-02-2014" }
    ];
    $scope.DuyuruKaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.duyurular.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni duyuru eklendi  ";
    };

    $scope.DuyuruSec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.DuyuruGuncelle = function() {
        $scope.message = "basarila  duyuru guncellendi";
    };
    $scope.DuyuruSil = function(eleman) {
        $scope.duyurular.splice($scope.duyurular.indexOf($scope.secilen), 1);
        $scope.message = "basarila  duyuru silindi ";
    };
    /**
     * YORUMLAR FUNCTIONS
     */
    $scope.yorumlar = [
        { kullanci_adi: "mohammad", icerik: "des ahmad  1 2 3 4 5 ", tarih: "12-02-2010" },
        { kullanci_adi: "ali", icerik: "des ali 1 2 3 4 5 ", tarih: "12-02-2012" },
        { kullanci_adi: "asad", icerik: "des asad 1 2 3 4 5 ", tarih: "12-02-2014" }
    ];

    $scope.YorumKaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.yorumlar.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni yorum eklendi  ";
    };

    $scope.YorumSec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.YorumGuncelle = function() {
        $scope.message = "basarila  yorum guncellendi";
    };
    $scope.YorumSil = function(eleman) {
        $scope.yorumlar.splice($scope.yorumlar.indexOf($scope.secilen), 1);
        $scope.message = "basarila  yorum silindi ";
    };




    /**
     * 
     * @param {*} Uye islemleri 
     */
    $scope.cikisYap = function() {
        $scope.kullanci = 0;
        $scope.zyaretci = 1;
    };
    $scope.girisYap = function(user) {

        $scope.kullanci = 1;
        $scope.zyaretci = 0;
    };

});