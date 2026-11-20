import maple from "./assets/images/sample/maple.jpg";
import biscuit from "./assets/images/sample/biscuit.jpg";
import pepper from "./assets/images/sample/pepper.jpg";

export const demoAnimals = [
  {
    _id: "maple",
    name: "Maple",
    breed: "Beagle",
    age: "3 years",
    gender: "Female",
    photos: [maple],
    about: "Maple likes gentle walks and quiet afternoons. She takes a little time to warm up to new people.",
    info: "In this sample profile, Maple is staying with a foster family while she gets used to a home routine.",
    vaccinated: true,
    neutered: true,
  },
  {
    _id: "biscuit",
    name: "Biscuit",
    breed: "Golden Retriever",
    age: "8 months",
    gender: "Male",
    photos: [biscuit],
    about: "Biscuit is a playful puppy who loves tug toys and is still learning his leash manners.",
    info: "In this sample profile, Biscuit is practicing short walks and settling down after playtime.",
    vaccinated: true,
    neutered: false,
  },
  {
    _id: "pepper",
    name: "Pepper",
    breed: "French Bulldog",
    age: "5 years",
    gender: "Female",
    photos: [pepper],
    about: "Pepper enjoys sniffing around the garden and curling up next to someone with a book.",
    info: "In this sample profile, Pepper does best with a predictable routine and a quiet spot to rest.",
    vaccinated: true,
    neutered: true,
  },
];
