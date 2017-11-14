var browse = document.getElementById('browse-btn');
var navigation = document.getElementById('navigation');
var browsepopup = document.getElementById('browse-popup');
var list = document.getElementById('products');
document.addEventListener('click', (e) => {
    if(e.target === browse){
        if(browsepopup.style.display === "none") browsepopup.style.display = "flex";
        else browsepopup.style.display = "none";
    }else{
        browsepopup.style.display = "none";
    }
})

function prodDetail(id){
    alert(id);
}


$(document).ready(function(){
    $('.marquee').animate({left: '250px',
    height: '+=150px',
    width: '+=150px'});
    
$('#float').on('click', function(){
    var newItem = "<div class='item' > </div>"
    var test = document.createElement("div");
    test.innerHTML = "<img src='/img/thumb.png' alt='' class='image'> <h4> new item </h4> <p>$100</p>";
    $(test).addClass('item')
    list.append(test)
})
$('#hide').on('click', function(){
    $('#navigation').fadeOut();
    $('#show').fadeIn().css('display', 'flex');
})

$('#scrolltotop').on('click', function(event){    
    $('html, body').animate({
        scrollTop: 0
    })
})
$('#show').on('click', function(){
    $('#navigation').fadeIn();
    $('#show').fadeOut();
})

    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(!nextImg.length){
             nextImg = $('#first')

            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }else{
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } 
    })
    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(!prevImg.length){
             prevImg = $('#last')

            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }else{
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    })

})