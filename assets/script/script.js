// Animasi ngetik pada Flouws di halaman Home
const txtElement = ['Flouws'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik() {
    if (count == txtElement.length) {
        count = 0;
    }
    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }
    setTimeout(ketik, 1000);
})();
// Fungsi validasi untuk kritik dan saran
function validasi(form) {
    let lolos = true;
    let errorTxt = '';
    for (i = 0; i < 3; i++) {
        //  jika tidak eror
        if (form[i].value.trim().length <= 0) {
            //  Penamaan Var errorTxt
            switch (i) {
                case 0:
                    errorTxt = 'Nama';
                    break;
                case 1:
                    errorTxt = 'Email';
                    break;
                case 2:
                    errorTxt = 'Pesan';
                    break;
            }
            if (form[i].nextElementSibling.className != 'error') {
                form[i].style.borderColor = 'blue';
                form[i].insertAdjacentHTML('afterend', "<div class='error'>" + errorTxt + ' wajib diisi</div>');
            }
            lolos = false;
        } else {
            //  jika ada eror, hapus eror
            if (form[i].nextElementSibling.className == 'error') {
                form[i].style.borderColor = '#FD683C';
                form[i].nextElementSibling.remove();
            }
        }
    }
    return lolos;
}

// Jika dokumen siap dijalankan
$(document).ready(function () {
    // Perubahan warna navbar saat di scroll
    $(window).scroll(function () {
        // membuat perubahan warna navbar
        if (this.scrollY > 20) {
            $('.navbar').addClass('canges-color');
        } else {
            $('.navbar').removeClass('canges-color');
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});
