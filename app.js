const sliderMain = new Swiper('.slider_main', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60
    }
  }
})

const sliderBg = new Swiper('.slider_bg', {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,

})

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('opened')
  })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})


const soundBtn = document.querySelector('.switch-btn')
const aud = document.querySelector('.audio')

sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? soundBtn.style.opacity=0 : soundBtn.style.opacity=1
})
isPlay = true;
const toggle = () => {
  if (isPlay) {
    aud.pause()
    isPlay = false;
    soundBtn.classList.add('switch-on')
  }
  else if (!isPlay) {
    aud.play()
    isPlay = true;
    soundBtn.classList.remove('switch-on')
  }
}
soundBtn.addEventListener('click', toggle)
function play() {
  aud.play()
}
window.addEventListener('mousemove', play)
