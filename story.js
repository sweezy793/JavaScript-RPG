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

 console.log(`After a few hours, all three groups were brought together.`);
 console.log(`"All right," The captain of the King's Guard called. "You have learned the basics, now it is time to test your mettle!.
 You will be taken, one at a time, and tested. You must understand: if you fail, you will be dead. Is that clear?"`);
 console.log(`The group shared uncomfortable glances. "If you choose not to test," the captain continued, "you will be escorted from
 the palace. Those of you who succeed, will be allowed to progress to real champion training."`);
 console.log(`This time, there was a murmur of excitement. A short while later, only one man left. Eventually, your name is called.
 Steeling yourself, you follow the guard into the palace and down a set of stair. You stop at a door with two guard standing at attention.
 You are instructed that you must go to the far end of the dungeon and retrieve a special coin. If you return with it, you will progress.`);
 console.log(`One of the guards opens the door, and you are allowed in. As soon as you get in, the door closes behind you. By the flickering
 torchlight coming from the walls, you can see that all of the cells in the dungeon are open, and broken bits of furniture are littered
 throughout the room. You hear a sound and manage to catch a glimpse of a goblin ripping into a fluffed chair.`);
 let enemies = [new Monster(`Goblin`, 2, 7, 10, 5, {attack: 0, sneak: 0, tackle: 0,mana:0}, 1, 2)];
 let answer = prompt(`What do you do? Use Attack, Sneak, Tackle or Magic?`);
 let victorious = decisionMaker(answer);
 if(victorious) {
  console.log(`You succeeded in your ${answer} encounter. You leveled up you ${answer} skill!`);
  mainHero.levelUp(answer.toLowerCase());
 } else {
  console.log(`You died...`);
 }

 const heroParty=[mainHero];

 const talrand=new Hero(`Talrand`,10,`Male`,`Human`,`Warrior`,
                       {attack:6,sneak:2,tackle:4,mana:1},
                       {name:`Broadsword`,minDamage:2,maxDamage:8},
                       {name:`Chain Mail`,attackBarrierBonus:5});
 checkClass(talrand,talrand.characterRole);
 checkRace(talrand,talrand.race);

 heroParty.push(talrand);
