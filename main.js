// 0D4F1DF8951B3287C4BB5CD137DAC49B7555

const links = document.querySelectorAll("nav ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

let bm = document.querySelector(".burger-menu")
bm.addEventListener("click", ()=>{
  bm.classList.toggle("burger-menu-active")
})

const pn = document.getElementById('pn').value
const email = document.getElementById('email').value
const formname = document.getElementById('name').value
const message = document.getElementById('message').value

function sendEmail() {
  Email.send({
    To : 'angelovdaniel24@gmail.com',
    From : "Wedding order",
    PhoneNumber : {pn},
    Email : {email},
    Name : {formname},
    Message : {message}
  })
  .then(function (message) {
  alert("Mail has been sent successfully")
  });
  }

  console.log(pn)