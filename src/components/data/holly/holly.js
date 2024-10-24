import surface10 from "./images/surface10.png";
import surface15 from "./images/surface15.png";
import surface18 from "./images/surface18.png";
import surface20 from "./images/surface20.png";

// List of all products and their details
const items = [
  {
    id: 1,
    title: "Magenetic",
    prices: {
      "A4": 30,
      "A3": 40,
    },
    imgSrc: surface10,
    paypalID: "YY37FCHVDARYS"
  },
  {
    id: 2,
    title: "FlowState",
    prices: [30],
    imgSrc: surface15,
    paypalID: "SHX2LGEUZPPBQ"
  },
  {
    id: 3,
    title: "Ajax",
    prices: [30],
    imgSrc: surface18,
  },
  {
    id: 4,
    title: "Becoming",
    prices: [30],
    imgSrc: surface20,
  },
];


// What should be displayed on the homepage?
const holly = {
    name: "holly",
    insta: "hollymillea",
    collectionImg: surface10,
    items: items
};

export default holly;
