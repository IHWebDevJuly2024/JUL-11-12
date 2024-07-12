// PRIMITIVE DATA TYPES
const username = "Laura";
// JS stores this string in memory and is not possible to modify it
const upperUsername = username.toUpperCase();

console.log(username); // this keeps the original value
console.log(upperUsername); // this is a new string

// NON PRIMITIVE
const user1 = {
  username: "Laura",
  role: "Marketing",
};

// we can modify the non primitive data
user1.role = "Growth marketer";

console.log(user1);

const user2 = user1; // OK COOOOL I'm creating a copy, right???

console.log(user2);

user2.username = "Valentina";
user2.role = "Career advisor";

console.log("THIS IS USER 2 after modifying it: ");
console.table(user2);
console.log("THIS IS USER 1 after modifying user 2: ");
console.table(user1);
// user1 and user2 have are essentially the same, we are just changing the variable name. (they have same DNA)

const user3 = structuredClone(user2); // SUPER USEFUL FUNCTION TO CREATE COPIES OF OBJECTS

user3.role = "Teacher";
user3.username = "Mica";

console.log("THIS IS USER 2 after modifying the clone: ");
console.table(user2);
console.log("THIS IS USER 3 after the modification: ");
console.table(user3);
