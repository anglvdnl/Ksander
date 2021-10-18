$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

let bm = document.querySelector(".burger-menu")
bm.addEventListener("click", ()=>{
  bm.classList.toggle("burger-menu-active")
})
