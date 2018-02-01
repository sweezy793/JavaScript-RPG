let name=prompt("What is the name of your character?");
let gender=prompt("What is the gender of your character ?");
let race=prompt("What race is your character? (Human, Elf, Troll, Hybrid, Demon)");
let characterRole=prompt("What class is your character? (Warrior, Mage, Knight, Thief, Hunter, Slave)");

const mainHero=new Hero(name,100,gender,race,characterRole);

checkRace(mainHero,mainHero.race);
checkClass(mainHero,mainHero.characterRole);

console.log(mainHero);
