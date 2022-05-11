
const chatDiv = document.querySelector(".chat");
const chatBox = document.querySelector("#chatbox");
const bioHidden = document.querySelector(".hidden");
let inputArray = [];

// listen to keyup
chatBox.addEventListener("keyup", (event) => {
  event.key !== "Backspace" ? inputArray.push(event.key) : inputArray = [];
  let toto= inputArray.join("").toLowerCase();
  console.log(toto);
  if (toto === "yes") {
    chatDiv.remove();
    bioHidden.classList.remove("hidden");
  }
})
// remove hidden classlist

// change placeholder
