new WOW().init();

$(window).scroll(function () {
    var progBar = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
    $('.progress__bar').width(progBar + "%");
});

$('.sidebar__btn').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar__active');
})

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

$('document').ready(function () {
    loadIMG();
    typing();
    setTimeout(typingTwo, 550);
});

$('.slider').slick({
    autoplay: true
});

function loadIMG() {
    $.getJSON('assets/pictures.json', function (data) {
        var out = '';
        for (var key in data) {
            out += '<a href="' + data[key].href + '" class="img wow fadeInUp" data-wow-delay="' + data[key].del + '" style="background: url(' + data[key].dis + ') no-repeat center; background-size: cover;">' + '</a>';
        }
        $('#gallery-cont').html(out);
    })
};

var i = 0, text, textTwo, v = 0;
text = "DEVEL"

function typing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

textTwo = "TECH"

function typingTwo() {
    if (v < textTwo.length) {
        document.getElementById("teh").innerHTML += textTwo.charAt(v);
        v++;
        setTimeout(typingTwo, 60);
    }
}