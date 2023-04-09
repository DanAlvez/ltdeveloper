$(function () {
  $('#projects .carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000
  })

  $('#depositions .slide-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000
  })

  $('.burguer').on('click', openClick)
})

function openClick() {
  if (!$('.burguer').hasClass('open')) {
    $('.burguer').addClass('open')
    $('#menu').addClass('activate')
  } else {
    $('.burguer').removeClass('open')
    $('#menu').removeClass('activate')
  }
}

function closeClick() {
  var close = document.querySelector('.burguer')
  var off = document.querySelector('#menu')
  close.classList.remove('open')
  off.classList.remove('activate')
}
