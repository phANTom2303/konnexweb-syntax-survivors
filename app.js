url = "https://kodessphere-api.vercel.app";
const data = {
  teamid: "7z423rh",
  devices: "led",
  value: "#00000"
};


fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "POST/devices"
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Error:", error));


const getFact = async () => {
  console.log("Getting Data wait.....");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.dir(data[0]);
}


//the part that actually works (pls see):
let btnpr = document.querySelector("#colorDisplay");
btnpr.addEventListener("click", () => {
  // console.log("I am pressed");
  let bulb = document.querySelector("#bulb-state");
  let state = bulb.value.toUpperCase();
  // console.log(state);
  if (state === "ON") {
    document.getElementById("bulb-img").src = "./assets/on-bulb.png";
  }
  else if (state === "OFF") {
      document.getElementById("bulb-img").src = "./assets/off-bulb.png";
    }

  let ledcolor=document.querySelector("#colorInput");
  let clr=ledcolor.value.toUpperCase();
  let colordiv=document.querySelector("#led-light");
  colordiv.style.backgroundColor=clr;
  }

);

//for LED light :
// const colorInput = document.getElementById('colorInput');
// const colorDisplay = document.getElementById('colorDisplay');
// const changeColorButton = document.getElementById('changeColorButton');

// changeColorButton.addEventListener('click', () => {
//   const hexValue = colorInput.value;
//   if (isValidHex(hexValue)) {
//     colorDisplay.style.backgroundColor = hexValue.value;
//   } else {
//     colorDisplay.style.backgroundColor = 'red'; // Set background to red for invalid input (optional)
//   }
// });

// function isValidHex(hex) {
//   // Regex to check for valid hex color format (including alpha channel)
//   const regex = /^#?([0-9A-Fa-f]{3}){1,2}$/;
//   return regex.test(hex);
// }


