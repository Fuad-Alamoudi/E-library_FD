// Get the modal
var modallogin = document.getElementById('modal-login');
var modalSigup = document.getElementById('modal-login');

// When the user clicks anywhere outside of the modal, close it
function showModelLogin() {  
    modallogin.style.display="block"
    }  
    function showModelSingup() {
        modallogin.style.display = "none";  
        modalSigup.style.display="block"
        } 
window.onclick = function(e) {
    if (e.target == modallogin) {
        modallogin.style.display = "none";
    }
}
// Start Timair
const advContainer = document.querySelector(".adv-container");
const closeBtn = document.querySelector(".adv-container .close");
const advLink=document.querySelector(".adv-container a");

if (!localStorage.getItem("DisplayingAdv")){
setTimeout(() => {
    advContainer.classList.add("activ");
}, 1000);
}

const stopDisplayingAdv = ()=> {
    localStorage.setItem("DisplayingAdv",false);
    advContainer.classList.remove("activ")
};
closeBtn.addEventListener("click",stopDisplayingAdv);
advLink.addEventListener("click",stopDisplayingAdv);
// End Timair