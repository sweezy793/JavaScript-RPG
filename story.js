let name=prompt("What is the name of your character?");
let gender=prompt("What is the gender of your character ?");
let race=prompt("What race is your character? (Human, Elf, Troll, Hybrid, Demon)");
let characterRole=prompt("What class is your character? (Warrior, Mage, Knight, Thief, Hunter, Slave)");

const mainHero=new Hero(name,20,gender,race,characterRole);

checkRace(mainHero,mainHero.race);
checkClass(mainHero,mainHero.characterRole);

console.log(
  `${mainHero.name} had been dreaming of an adventure for several years. Finally, the day arrived.
   ${mainHero.name} had been accepted to train as one of the ${mainHero.race} king's champions. Heart
   beating furiously in anticipation, ${mainHero.name} entered tthe palace's training grounds.

   A burly man stood in the center of the grounds surrounded by people that looked as amazed as ${mainHero.name}
   felt. Feeling that was the right place to be, ${mainHero.name} joined the group.

   "You're late" the burly man said. "Go get yourself one of those" he said, pointing at the weapon rack on the side
   of the grounds.`
 );

 mainHero.equipNewWeapon
 (
   {
     name:prompt(`Which weapon do you want? (Sword, Wand, Dagger, Bow)`),
     minDamage:1,
     maxDamage:6
   }
 );

 console.log(
   `As ${mainHero.name} pulled out the ${mainHero.equippedWeapon.name} from the rack, an attendant
    walked over and offered some leather aromor. ${mainHero.name} hesitated a moment, then noticed
    that the rest of the trainees were wearing it. ${mainHero.name} allowed the attendant to assist
    in donning the armor, then hurried back to the group.`
 );

 mainHero.equipNewArmor
 (
   {
     name:`Leather`,
     attackBarrierBonus:3
   }
 );

 console.log(
   `They had split into 3 groups. One sparring, one in a part of grounds littered with things to hide behind
    apparently practicing their sneaking skills, and the last group seemed to be haggling with some merchants
    from the city's market.`
 );
