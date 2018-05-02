var app = angular.module("yorumlar", []);
app.controller("yorumlarCtrl", function($scope) {
    $scope.kullanci = 1;
    $scope.yorumlar = [
        { kullanci_adi: "mohammad", icerik: "des ahmad  1 2 3 4 5 ", tarih: "12-02-2010" },
        { kullanci_adi: "ali", icerik: "des ali 1 2 3 4 5 ", tarih: "12-02-2012" },
        { kullanci_adi: "asad", icerik: "des asad 1 2 3 4 5 ", tarih: "12-02-2014" }
    ];
    $scope.yeniEkle = {};
    $scope.secilen = {};
    $scope.kaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.yorumlar.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni yorum eklendi  ";
    };

    $scope.sec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.guncelle = function() {
        $scope.message = "basarila  yorum guncellendi";
    };
    $scope.sil = function(eleman) {
        $scope.yorumlar.splice($scope.yorumlar.indexOf($scope.secilen), 1);
        $scope.message = "basarila  yorum silindi ";
    };
});