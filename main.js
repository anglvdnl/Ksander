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


var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success')
    status.innerHTML = "Success";
    form.reset()
  }).catch(error => {
    status.classList.add('error')
    status.innerHTML = "Unsuccess"
  });
}
form.addEventListener("submit", handleSubmit)