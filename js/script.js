$(function () {
  $('#projects .carousel').slick({
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  $('.faq .question').on('click', dropdownFaq)
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

function dropdownFaq() {
  var open2 = $(this).find('h2')
  var activate2 = $(this).find('p')
  if (!open2.hasClass('open-2')) {
    open2.addClass('open-2')
    activate2.addClass('activate-2')
  } else {
    open2.removeClass('open-2')
    activate2.removeClass('activate-2')
  }
}
