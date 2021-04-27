const container = document.querySelector(".container");
const container_layar = container.children[0];
const layar = container_layar.children[0];

// operasi
const operasi = document.querySelector(".operasi");
const tambah = operasi.children[0];
const kurang = operasi.children[1];
const kali = operasi.children[2];
const bagi = operasi.children[3];



// angka
const angka = document.querySelector(".angka");
const tujuh = angka.children[0];
const delapan = angka.children[1];
const sembilan = angka.children[2];
const empat = angka.children[3];
const lima = angka.children[4];
const enam = angka.children[5];
const satu = angka.children[6];
const dua = angka.children[7];
const tiga = angka.children[8];
const nol = angka.children[9];

const koma = angka.children[10];
const clear = angka.children[11];

// hasil
const hasil = document.querySelector('.samadengan');

// function clear
clear.onclick = function() {
    layar.value = '0';

};

// function hasil
hasil.onclick = function() {

    layar.value = eval(layar.value);


}

// event operasi
operasi.addEventListener('click', function(klik) {
    if (klik.target == tambah) {
        layar.value += tambah.value;
    } else if (klik.target == kurang) {
        layar.value += kurang.value;
    } else if (klik.target == kali) {
        layar.value += kali.value;
    } else if (klik.target == bagi) {
        layar.value += bagi.value;
    }
});




// event angka
angka.addEventListener('click', function(klik) {

    if (klik.target == satu) {
        if (layar.value == '0') {
            layar.value = satu.value;
        } else {
            layar.value += satu.value;
        }
    } else if (klik.target == dua) {
        if (layar.value == '0') {
            layar.value = dua.value;
        } else {
            layar.value += dua.value;
        }
    } else if (klik.target == tiga) {
        if (layar.value == '0') {
            layar.value = tiga.value;
        } else {
            layar.value += tiga.value;
        }
    } else if (klik.target == empat) {
        if (layar.value == '0') {
            layar.value = empat.value;
        } else {
            layar.value += empat.value;
        }
    } else if (klik.target == lima) {
        if (layar.value == '0') {
            layar.value = lima.value;
        } else {
            layar.value += lima.value;
        }
    } else if (klik.target == enam) {
        if (layar.value == '0') {
            layar.value = enam.value;
        } else {
            layar.value += enam.value;
        }
    } else if (klik.target == tujuh) {
        if (layar.value == '0') {
            layar.value = tujuh.value;
        } else {
            layar.value += tujuh.value;
        }
    } else if (klik.target == delapan) {
        if (layar.value == '0') {
            layar.value = delapan.value;
        } else {
            layar.value += delapan.value;
        }
    } else if (klik.target == sembilan) {
        if (layar.value == '0') {
            layar.value = sembilan.value;
        } else {
            layar.value += sembilan.value;
        }
    } else if (klik.target == nol) {
        if (layar.value == '0') {
            layar.value = nol.value;
        } else {
            layar.value += nol.value;
        }
    } else if (klik.target == koma) {
        layar.value += koma.value;
    }

});