// 1. Show an alert box on click on a link.

const event1 = document.getElementById('myLink');
event1.addEventListener("click", () => {
    alert("Welcome");
});

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user. 
const mobile1 = document.getElementById('mobile1');
const mobile2 = document.getElementById('mobile2');
const mobile3 = document.getElementById('mobile3');

mobile1.addEventListener('click', () => {
    alert('You clicked on Mobile 1');
});

mobile2.addEventListener('click', () => {
    alert('You clicked on Mobile 2');
});

mobile3.addEventListener('click', () => {
    alert('You clicked on Mobile 3');
});
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleterow(button){
    const Row = button.parentElement.parentElement;
    Row.remove();
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
const image1 = document.getElementById("image");

// Change the image on mouseover
image1.addEventListener("mouseover", () => {
    image1.src = './assets/ship-8170663_640.jpg';
});

// Revert the image back on mouseout
image1.addEventListener("mouseout", () => {
    image1.src = './assets/sea-7394353_640.jpg';
});


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
let counterValue = 0;
const counterdisplay = document.getElementById("counter");
const increasebutton = document.getElementById("increaseBtn");
const decreasebutton = document.getElementById("decreaseBtn");

// function updateCounter() {
//     counterdisplay.textContent = counterValue;
// }


// increasebutton.addEventListener('click', () => {
//     counterValue++;
//     updateCounter();
// });


// decreasebutton.addEventListener('click', () => {
//     counterValue--;
//     updateCounter();
// });


 
