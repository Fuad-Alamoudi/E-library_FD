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

