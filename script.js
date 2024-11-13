// Button Event Listener
const button = document.querySelector("#myButton");

function handleClick() {
    alert("Was the Button clicked or was it all a dream");

    // Removes event listener first click
    button.removeEventListener("click", handleClick);
}
// one time click 
button.addEventListener("click", handleClick);

// Link Event Listener
const link = document.querySelector("#myLink");

link.addEventListener("click", (event) => {
    // Prevent  navigation
    event.preventDefault();

    //  Alert message
    alert("No distractions! I’m coding!");
});
