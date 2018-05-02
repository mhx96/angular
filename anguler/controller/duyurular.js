var app = angular.module("duyurular", []);
app.controller("duyurularCtrl", function($scope) {
    $scope.kullanci = 1;
    $scope.duyurular = [
        { baslik: "duyurular mohammad", icerik: "des ahmad  1 2 3 4 5 ", tarih: "12-02-2010" },
        { baslik: "duyurular ali", icerik: "des ali 1 2 3 4 5 ", tarih: "12-02-2012" },
        { baslik: "duyurular asad", icerik: "des asad 1 2 3 4 5 ", tarih: "12-02-2014" }
    ];
    $scope.yeniEkle = {};
    $scope.secilen = {};
    $scope.kaydet = function() {
        // console.log($scope.yeniEkle); // test için
        $scope.duyurular.push($scope.yeniEkle);
        $scope.yeniEkle = {};
        $scope.message = "basarila yeni duyuru eklendi  ";
    };

    $scope.Sec = function(eleman) {
        console.log(eleman); // test için
        $scope.secilen = eleman;
    };
    $scope.guncelle = function() {
        $scope.message = "basarila  duyuru guncellendi";
    };
    $scope.Sil = function(eleman) {
        $scope.duyurular.splice($scope.duyurular.indexOf($scope.secilen), 1);
        $scope.message = "basarila  duyuru silindi ";
    };
});