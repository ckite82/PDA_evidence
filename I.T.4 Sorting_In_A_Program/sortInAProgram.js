const superheros = [
    {name: "Carol Danvers", heroName: "Captain Marvel", age: 60},
    {name: "Bruce Banner", heroName: "Hulk", age: 51},
    {name: "Tony Stark", heroName: "Iron Man", age: 50},
    {name: "Steve Rogers", heroName: "Captain America", age: 102},
    {name: "Scott Lang", heroName: "Ant Man", age: 51},
];
console.log('All characters', superheros);

const sortAge = superheros.sort(function(hero1, hero2){
    if (hero1.age > hero2.age) {
        return 1;
    } else {
        return -1;
    }
});
console.log('Sort heros by age', sortAge);

