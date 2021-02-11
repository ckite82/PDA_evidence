// Function that searches for data
const superheros = [
    {name: "Tony Stark", heroName: "Iron Man"},
    {name: "Bruce Banner", heroName: "Hulk"},
    {name: "Steve Rogers", heroName: "Captain America"},
    {name: "Scott Lang", heroName: "Ant Man"},
    {name: "Carol Danvers", heroName: "Captain Marvel"},
];
console.log('All characters', superheros);
// Search superheros
const selectSuperhero = superheros.filter(superheros => 
    superheros.heroName === 'Captain Marvel');
console.log('Female hero:', selectSuperhero);

