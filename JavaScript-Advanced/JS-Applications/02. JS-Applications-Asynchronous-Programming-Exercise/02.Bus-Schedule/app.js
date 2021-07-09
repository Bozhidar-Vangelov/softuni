function solve() {
  // gets htmlElements
  let departButton = document.getElementById("depart");
  let arriveButton = document.getElementById("arrive");
  const infoBox = document.querySelector(".info");

  // saves initial station value
  let id = { next: "depot" };

  async function depart() {
    //makes request and parses response
    const url = `http://localhost:3030/jsonstore/bus/schedule/${id.next}`;
    let stopInfoRequest = await fetch(url);
    let stopInfo = await stopInfoRequest.json();

    // saves next station value
    id = stopInfo;

    // updates info span
    infoBox.textContent = `Next stop ${id.name}`;

    // fixes buttons
    departButton.disabled = true;
    arriveButton.disabled = false;
  }

  function arrive() {
    // updates info span
    infoBox.textContent = `Arriving at ${id.name}`;

    // fixes buttons
    departButton.disabled = false;
    arriveButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
