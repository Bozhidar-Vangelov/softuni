function getInfo() {
  //gets htmlElements
  const stopIdInput = document.getElementById("stopId");
  const stopId = stopIdInput.value;
  const busesUl = document.getElementById("buses");
  const stopNameDiv = document.getElementById("stopName");

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  //cleasr the list with buses
  busesUl.innerHTML = "";

  (async () => {
    try {
      //makes request and parses response
      const busInfoRequest = await fetch(url);
      const busInfo = await busInfoRequest.json();

      //updates bus station name field
      stopNameDiv.textContent = busInfo.name;

      //fulfills the list with buses
      Object.keys(busInfo.buses).forEach((key) => {
        let li = document.createElement("li");
        li.textContent = `Bus ${key} arrives in ${busInfo.buses[key]} minutes`;
        busesUl.append(li);
      });
    } catch (error) {
      //updates "error" in the bus station name field in case of wrong station id
      stopNameDiv.textContent = "Error";
      error = stopNameDiv.textContent;
    }
  })();
}
