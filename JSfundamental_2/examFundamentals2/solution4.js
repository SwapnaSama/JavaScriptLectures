const flight = {
  flightName: "Airways",
  location: "YUL Montreal",
  name: "swapna",
  age: 28,
  date: "1st august, 2021",
  details: {
    price: 1500,
    trip: "roundtrip",
    arrival: "7:00am",
    depature: "9:00pm",
  },
};

console.log(flight.location + "" + ", " + flight.details.depature);
