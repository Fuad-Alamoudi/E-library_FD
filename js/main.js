// Get the modal
const modal = document.getElementById("modal");
const login = document.getElementById("login");
const singup = document.getElementById("singup");
const btnLogin = document.getElementById("btn-login");
const btnCreate = document.getElementById("btn-create");

// When the user clicks anywhere outside of the modal, close it
btnLogin.addEventListener('click',function(){
    login.style.display="block";  
    modal.style.display="block";
        
});
btnCreate.addEventListener('click',function(){
    login.style.display="none";
    singup.style.display="block";

});
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

//start Cart
var numCart = document.getElementById("num-cart");
var addCart =document.getElementById("add-cart");
var currentCart = 0;
addCart.addEventListener("click",function Incrnmt(){
    currentCart +=1;
    if(currentCart > 0){
        numCart.style.display = "block";
        console.log(currentCart);
    }
    numCart.innerHTML = currentCart;
});

//End Cart

//chang Langug
var changlang = document.getElementById("chang-lang");
var body = document.getElementById("body");
changlang.addEventListener("click",function(){
    body.classList.toggle("ltr");
});
//End Lang
// Start Timair
const advContainer = document.querySelector(".adv-container");
const closeBtn = document.querySelector(".adv-container .close");
const advLink=document.querySelector(".adv-container a");

if (!localStorage.getItem("DisplayingAdv")){
setTimeout(() => {
    advContainer.classList.add("activ");
}, 2000);
}

const stopDisplayingAdv = ()=> {
    localStorage.setItem("DisplayingAdv",false);
    advContainer.classList.remove("activ")
};
closeBtn.addEventListener("click",stopDisplayingAdv);
advLink.addEventListener("click",stopDisplayingAdv);
// End Timair
//Search


//small slider
// const booksize = document.querySelector('.container-book .contBox').clientWidth;
// var prevBtn = document.getElementById("prev");
// var nextBtn = document.getElementById("next");


//     prevBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       document.querySelector('.container-book').scrollLeft += (booksize+30);
//     });
//     nextBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector('.container-book').scrollLeft -= (booksize+30);
//       });


