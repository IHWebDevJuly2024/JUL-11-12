const coffeeTypes = [
  "Espresso",
  "Cappuccino",
  "Latte",
  "Americano",
  "Mocha",
  "Macchiato",
  "Flat White",
  "Affogato",
  "Irish Coffee",
  "Turkish Coffee",
  "French Press",
  "Pour Over",
  "Cold Brew",
  "Nitro Cold Brew",
  "Dalgona Coffee",
  "Vienna Coffee",
  "Bulletproof Coffee",
  "Decaf",
  "Instant Coffee",
  "Coffee with Milk",
];

const copyOfArray = structuredClone(coffeeTypes);

copyOfArray.sort();

console.log(coffeeTypes);
console.log(copyOfArray);

// ANOTHER WAY OF CREATING COPIES FOR ARRAYS
// THIS IS DANGEROUS BECAUSE it works only for arrays that contain primitive data types.
const newCopy = [...coffeeTypes];
newCopy.sort().reverse();
console.log(newCopy);
console.log(coffeeTypes);

const users = [
  { username: "John Doe", role: "admin" },
  { username: "Jane Smith", role: "user" },
  { username: "Michael Johnson", role: "user" },
  { username: "Emily Davis", role: "user" },
  { username: "David Wilson", role: "user" },
];

//When we create a copy of an array with objects
const usersCopy = [...users];

// and we modify one of the objects inside the copy
usersCopy[0].username = "Bernardo Johnson";
// we are also modifying the object inside the original array
console.log(users);

const plants = [
  { name: "Rose", description: "A beautiful flower with thorns." },
  { name: "Fern", description: "A leafy green plant that loves shade." },
  { name: "Lily", description: "An elegant flower with large petals." },
  { name: "Cactus", description: "A desert plant with spiky stems." },
  {
    name: "Orchid",
    description: "A delicate flower that requires special care.",
  },
  {
    name: "Bamboo",
    description: "A fast-growing plant used for various purposes.",
  },
  {
    name: "Succulent",
    description: "A water-storing plant with fleshy leaves.",
  },
  {
    name: "Palm",
    description: "A tropical tree with large, fan-shaped leaves.",
  },
  { name: "Sunflower", description: "A tall flower that follows the sun." },
  { name: "Ficus", description: "A popular indoor plant with glossy leaves." },
];

console.table(plants);

const plantsCopy = structuredClone(plants);

plantsCopy[plantsCopy.length - 1].name = "Dalia";

console.log("ORIGINAL ARRAY:");
console.table(plants);
console.log("COPY with Structured Clone:");
console.table(plantsCopy);
