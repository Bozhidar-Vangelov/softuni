function tickets(input, criteria) {
  let tickets = [];
  for (line of input) {
    let [destination, price, status] = line.split("|");
    price = Number(price);
    let ticket = {
      destination,
      price,
      status,
    };
    tickets.push(ticket);
  }

  let sortedTickets = tickets.sort((a, b) => {
    let result = 0;
    let criteriaType = a[criteria];
    if (typeof criteriaType === "string") {
      result = a[criteria].localeCompare(b[criteria]);
    } else {
      result = a[criteria] - b[criteria];
    }
    return result;
  });

  return sortedTickets;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
