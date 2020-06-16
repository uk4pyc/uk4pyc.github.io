// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modulation
var burger = document.getElementById('burger');

function openModal() {
    var x = document.getElementById("simpleModal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/*
burger.onclick = function () {
    modal.style.display = "block";
}
burger.click = function () {
    modal.style.display = "none"
}
*/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// // Listen for open click
// burger.addEventListener('click', openModal);

// // Listen for outside click
// window.addEventListener('click', clickOutside);

// // Function to open modal
// function openModal(){
//     modal.style.display = 'block';    
// }

// /* Function to close modal
// function closeModal(){
//     modal.style.display = 'none';    
// }*/

// // Function to close modal if outside click
// function clickOutside(e){
//     if(e.target == modal){
//         modal.style.display = 'none';    
//     }
// }