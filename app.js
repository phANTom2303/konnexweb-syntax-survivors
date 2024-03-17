url="https://kodessphere-api.vercel.app";
const data = {
    teamid:"7z423rh",
    devices:"led",
    value:"#00000"
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

