function openClick() {
  var open = document.querySelector('.burguer')
  var activate = document.querySelector('#menu')
  open.classList.add('open')
  activate.classList.add('activate')
}

function closeClick() {
  var close = document.querySelector('.burguer')
  var off = document.querySelector('#menu')
  close.classList.remove('open')
  off.classList.remove('activate')
}

$(document).ready(function () {
  $('.slide-container').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  })
})
