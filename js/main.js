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