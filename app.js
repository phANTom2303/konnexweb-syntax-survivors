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

  //BULB GLOWING CODE
  let bulb = document.querySelector("#bulb-state");
  let state = bulb.value.toUpperCase();
  // console.log(state);
  if (state === "ON") {
    document.getElementById("bulb-img").src = "./assets/on-bulb.png";
  }
  else if (state === "OFF") {
    document.getElementById("bulb-img").src = "./assets/off-bulb.png";
  }
  else {
    window.alert("Only on or off");
  }
  //BULB GLOWING CODE

  //AC State changing code
  let ac = document.querySelector("#ac-state");
  let ac_state = ac.value.toUpperCase();
  let acStateColour = document.querySelector("#acStateLight");
  if (ac_state === "OFF") {
    acStateColour.style.backgroundColor = "#db5a5a";
    ac.style.backgroundColor = "#db5a5a";
  }
  if (ac_state === "ON") {
    acStateColour.style.backgroundColor = "#63db5a";
    ac.style.backgroundColor = "#63db5a";
  }
  //AC state changing code

  //AC temp indicator code
  let acFieldColour = document.querySelector("#acTempValue");
  
  let ac_field_state = acFieldColour.value;
  console.log(ac_field_state)
  let acfielddiv = document.querySelector("#acTempIndicator");
  if (ac_field_state>0 && ac_field_state<11) {
    acFieldColour.style.backgroundColor =	"#48cae4";
    acfielddiv.style.backgroundColor = "#48cae4";
  }
  else if (ac_field_state>10 && ac_field_state<21) {
    acFieldColour.style.backgroundColor =	"#00D100";
    acfielddiv.style.backgroundColor = "#00D100";
  }
  else if (ac_field_state>20 && ac_field_state<31) {
    acFieldColour.style.backgroundColor =	"#FFA500";
    acfielddiv.style.backgroundColor = "#FFA500";
  }
  else{
    acFieldColour.style.backgroundColor =	"#DF362D";
    acfielddiv.style.backgroundColor = "#DF362D";
    window.alert("Too Hot");
  }
  

  
  //AC temp indicator code

  //COLOUR CHANGING CODE
  let ledcolor = document.querySelector("#colorInput");
  let clr = ledcolor.value.toUpperCase();
  let colordiv = document.querySelector("#led-light");
  colordiv.style.backgroundColor = clr;
  //COLOUR CHANGING CODE

  //FAN CHANGING CODE
  let fan = document.querySelector("#fan-state");
  let fan_state = fan.value.toUpperCase();
  console.log(fan_state);
  if (fan_state == 0) {
    document.getElementById("fan-img").src = "./assets/fan-still.png";
  }
  else if (fan_state == 1) {
    document.getElementById("fan-img").src = "./assets/fan-moving.gif";
  }
  else {
    window.alert("Only 0 or 1");
  }
  //FAN CHANGING CODE
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


