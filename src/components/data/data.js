import holly from "./holly/holly";

const issy = {
  name: "issy",
  collectionImg: holly.items[1].imgSrc,
  items: []
};

const leah = {
  name: "leah",
  collectionImg: holly.items[3].imgSrc,
  items: []
};

const orderedData = [holly, issy, leah];

// Shuffle the collections

let shuffled = orderedData
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export const collectionsData = shuffled;