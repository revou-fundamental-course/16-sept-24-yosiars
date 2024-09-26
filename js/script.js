//Berikut function untuk header interaktif
function replaceName(){
    let name = prompt("Siapa namamu?");
    console.log(name);
    document.getElementById("user-name").innerHTML = name;
}


//Berikut function untuk validasi form
function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

//Berikut function untuk slideshow
let indexSlide = 1;
slideShow(indexSlide);

function nextSlide(n) {
    slideShow(indexSlide += n);
}

function slideShow(index) {
    let listImage = document.getElementsByClassName("photo-banner");

    if (index > listImage.length) {
        indexSlide = 1;
    } 
    if (index < 1) {
        indexSlide = listImage.length;
    }

    // Set semua gambar tidak terlihat
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    // Tampilkan gambar yang sesuai dengan indexSlide
    if (listImage.length > 0) {
        listImage[indexSlide - 1].style.display = "block";
    }
}

// Panggil nextSlide setiap 2 detik
setInterval(() => nextSlide(1), 2000);

// Kode untuk buka/tutup navbar saat berubah ukuran layar
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
}