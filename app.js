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

if (window.matchMedia( "(min-width:640px)" ).matches) {
    
$(function(){
    $(".nav-button").addClass("hide");
})

$(function(){
    $(".sidebar").removeClass("hide");
})

$(function() {
    $('.mainbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})

$(function() {
    $('.portbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})

$(function() {
    $('.contbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})

$(function() {
    $('.linkedinbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})

$(function() {
    $('.githubbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})

$(function() {
    $('.emailbut').hover(
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-20px'}, 300);
        },
        function() {
            $('button',$(this)).stop().animate({'margin-left':'-115px'}, 300);
        }
    )
})
}else{

    $(function(){
        $(".nav-button").removeClass("hide");
    })

    $(function() {
        $('.nav-button').click(
            function() {
                $(".sidebar").toggleClass("hide");
            }
        )
    })
}


//ON CLICK EVENTS

$("#main").on("click", showHome);
$("#port").on("click", showPort);
$("#cont").on("click", showContact);
$("#linkedin").on("click", showLinkedin);
$("#github").on("click", showGitHub);
$("#email").on("click", showEmail);