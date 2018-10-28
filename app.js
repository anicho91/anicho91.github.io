const showHome = function (e) {
    e.preventDefault();
    $(".portDiv").addClass("hide");
    $(".contactDiv").addClass("hide");
    $(".mainDiv").removeClass("hide");
}

const showPort = function (e) {
    e.preventDefault();
    $(".mainDiv").addClass("hide");
    $(".contactDiv").addClass("hide");
    $(".portDiv").removeClass("hide");
}

const showContact = function (e) {
    e.preventDefault();
    $(".portDiv").addClass("hide");
    $(".mainDiv").addClass("hide");
    $(".contactDiv").removeClass("hide");
}

const showLinkedin = function () {
    window.location.href = 'http://www.linkedin.com/in/annanichols91'
}

const showGitHub = function () {
    window.location.href = 'https://github.com/anicho91'
}

const showEmail = function () {
    window.location.href = 'mailto:a.k.nichols@live.com?Subject=Hello'
}

// NAVBAR HOVERS

const mql = window.matchMedia("(min-width: 640px)");

const jsMedia = function (mql) {
    if (mql.matches) {
        console.log("peanut")
        $(".sidebar1").removeClass("hide");
        $(".sidebar").addClass("hide");
    }else{
        console.log("walnut")
        $(".sidebar").removeClass("hide");
        $(".sidebar1").addClass("hide");
    }
}

mql.addListener(jsMedia),


$(function() {
    $('.mainbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

$(function() {
    $('.portbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

$(function() {
    $('.contbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

$(function() {
    $('.linkedinbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

$(function() {
    $('.githubbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

$(function() {
    $('.emailbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-10px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-45px'}, 300);
        }
    )
})

    $(function() {
        $('.nav-button').on("click",
            function() {
                $(".sidebar").toggleClass("hide");
            }
        )
    })



//ON CLICK EVENTS

$("#main").on("click", showHome);
$("#main2").on("click", showHome);
$("#port").on("click", showPort);
$("#port2").on("click", showPort);
$("#cont").on("click", showContact);
$("#cont2").on("click", showContact);
$("#linkedin").on("click", showLinkedin);
$("#linkedin2").on("click", showLinkedin);
$("#github").on("click", showGitHub);
$("#github2").on("click", showGitHub);
$("#email").on("click", showEmail);
$("#email2").on("click", showEmail);