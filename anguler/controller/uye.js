function kontrol() {
    var parola = document.getElementById('parola').value;
    var kosul = 0,
        uh = 0,
        bh = 0,
        kh = 0,
        seh = 0,
        sh = 0;
    var sayilar = "0123456789";
    var sembol = "{}[]()-_*?";
    var kucuk = "abcdefg";
    var buyuk = "ABCDEFG";
    if (parola.length > 8) uh = 1;
    for (var i = 0; i < parola.length; i++) {
        var karakter = parola.charAt(i);
        if (sayilar.indexOf(karakter) > -1) sh = 1;
        if (sembol.indexOf(karakter) > -1) seh = 1;
        if (buyuk.indexOf(karakter) > -1) bh = 1;
        if (kucuk.indexOf(karakter) > -1) kh = 1;
    }
    kosul = uh + sh + bh + kh + seh;
    switch (kosul) {
        case 1:
            document.getElementById('sonuc').style.backgroundColor = "red";
            break;
        case 2:
            document.getElementById('sonuc').style.backgroundColor = "orange";
            break;
        case 3:
            document.getElementById('sonuc').style.backgroundColor = "yellow";
            break;
        case 4:
            document.getElementById('sonuc').style.backgroundColor = "yellowgreen";
            break;
        case 5:
            document.getElementById('sonuc').style.backgroundColor = "green";
            break;
        default:
            document.getElementById('sonuc').style.backgroundColor = "white";
            break;
    }
    document.getElementById('sonuc').style.height = "20px";
    document.getElementById('sonuc').style.width = kosul * 50 + "px";
}

function gonder() {
    var parola = document.getElementById('parola').value;
    var tparola = document.getElementById('tparola').value;
    if (parola.length <= 0 || tparola.length <= 0) {
        document.getElementById('sonuc').innerHTML = "Boş olamaz";
        return false;
    } else
    if (parola != tparola) {
        document.getElementById('sonuc').innerHTML = "Aynı olmalıdır";
        return false;
    }
}

function yaz() {

    var veri = '{"mesaj":[' +
        '{"icerik":"isim bos olamaz"},' +
        '{"icerik":"soyad bos olamaz"},' +
        '{"icerik":"email bos olamaz"},' +
        '{"icerik":"pasword auynali olamaldir "}]}';
    nesne = JSON.parse(veri);
    document.getElementById("veriler").innerHTML = '<ul class="list-unstyled">';
    for (var i = 0; i < nesne.mesaj.length; i++)
        document.getElementById("veriler").innerHTML +=
        "<li>" + nesne.mesaj[i]["icerik"] + "</li>";
    document.getElementById("veriler").innerHTML += "</ul>";
}