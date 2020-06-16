// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modulation
var burger = document.getElementById('burger');

burger.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
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