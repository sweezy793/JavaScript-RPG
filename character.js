class BaseCharacter
{
  constructor(name,health)
  {
    this.name=name;
    this.maxHealth=health;
    this.currentHealth=health;
    this.barriers=
    {
      attack:10,
      sneak:10,
      mana:10,
      tackle:10,

    };
    this.skills=
    {
      attack:0,
      sneak:0,
      mana:0,
      tackle:0,

    };
  }
};

class Hero extends BaseCharacter
{
  constructor(name,health,gender,race,role)
  {
    super(name,health);
    this.gender=gender;
    this.race=race;
    this.characterRole=role;
    this.isIncapacitated=false;
    this.equippedWeapon=
    {
      name: `None`,
      minDamage:null,
      maxDamage:null
    };
    this.equippedArmor=
    {
      name:`None`,
      hitBarrierBonus:null
    };
  };
};

const checkClass=function(hero,characterClass)
{
  let lowerCharacterClass=characterClass.toLowerCase();

  switch (lowerCharacterClass) {
    case `warrior`:
      her.skills.attack+=3;
      hero.skills.sneak--;
      hero.skills.tackle++;
      break;
    case `mage`:
      hero.skills.attack++;
      hero.skills.tackle--;
      hero.skills.mana+=3;
      break;
    case `knight`:
      hero.skills.attack+=6;
      hero.skills.sneak--;
      hero.skills.mana--;
      hero.skills.tackle++;
      break;
    case `thief`:
      her.skills.attack--;
      hero.skills.sneak+=3;
      hero.skills.tackle++;
      break;
    case `hunter`:
      her.skills.attack+=3;
      hero.skills.sneak++;
      hero.skills.tackle--;
      hero.skills.mana--;
      break;
    default:
    characterClass=prompt(`"${characterClass}" is not a valid class. Please choose again.`);
    hero,characterRole=characterClass;
    checkClass(hero,characterClass);
    break;
  }
};

const checkRace=function(hero,race)
{
  let lowerCaseRace=race.toLowerCase();
  switch (lowerCaseRace) {
    case `human`:
          break;
    case `elf`:
        hero.skills.mana++;
        hero.barriers.mana++;
        hero.skills.attack--;
        hero.barriers.sneak--;
        break;
    case `troll`:
        hero.skills.attack++;
        hero.barriers.sneak++;
        hero.skills.mana--;
        hero.barriers.tackle--;
        break;

    case `hybrid`:
        hero.skills.attack++;
        hero.barriers.mana--;
        hero.barriers.tackle++;
        break;
    default:
        race=prompt(`${race} is not a valid race. Please choose again`);
        hero.race=race;
        checkRace(hero,race);
        break;
  }
};
