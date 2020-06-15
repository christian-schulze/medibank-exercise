export function mergeByGender(jsonArray) {
  return jsonArray.reduce(
    (reduced, owner) => {
      const existingPets = reduced[owner.gender];
      const newPets = owner.pets ?? [];

      reduced[owner.gender] = [...existingPets, ...newPets];

      return reduced;
    },
    { Male: [], Female: [] }
  );
}

export function filterByCats(pets) {
  return Object.keys(pets).reduce(
    (reduced, gender) => {
      reduced[gender] = pets[gender].filter((pet) => pet.type === "Cat");

      return reduced;
    },
    { Male: [], Female: [] }
  );
}

function sortFn(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name === b.name) {
    return 0;
  } else if (a.name > b.name) {
    return 1;
  }
}

export function sortByName(pets) {
  return {
    Male: pets["Male"].sort(sortFn),
    Female: pets["Female"].sort(sortFn),
  };
}
