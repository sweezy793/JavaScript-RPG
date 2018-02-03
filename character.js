class BaseCharacter
{
  constructor(name,health,skills={attack:0,sneak:0,mana:0,tackle:0})
  {
    this.name=name;
    this.maxHealth=health;
    this.currentHealth=health;
    this.isIncapacitated=false;
    this.barriers=
    {
      attack:10,
      sneak:10,
      mana:10,
      tackle:10,

    };
    this.skills=skills;

  }
    attack()
    {
      return Math.floor(Math.random()*20)+1+this.skills.attack;
    };
    dealDamage()
    {
      return Mathe.floor(Math.random()*(this.equippedWeapon.maxDamage-this.equippedWeapon.minDamage+1))+this.equippedWeapon.minDamage;
    };
    sneak()
    {
      return Math.floor(Math.random()*20)+1+this.skills.sneak;
    };
    mana()
    {
      return Math.floor(Math.random()*20)+1+this.skills.mana;
    };
    tackle()
    {
      return Math.floor(Math.random()*20)+1+this.skills.tackle;
    };
};

class Hero extends BaseCharacter
{
  constructor(name,health,gender,race,role,skills,
    weapon={name:`None`,
            maxDamage:null,
            minDamage:null
          },armor={
            name:`None`,
            attackBarrierBonus:null
          })
  {
    super(name,health,skills);
    this.gender=gender;
    this.race=race;
    this.characterRole=role;

    this.equippedWeapon=weapon;
    this.equippedArmor=armor;
  };
  levelUp(skill)
  {
    this.maxHealth+=Math.floor(Math.random()*6)+1;
    this.skills(skill)+=1;
  };
  equipNewWeapon(newWeapon)
  {
    this.equippedWeapon=newWeapon;
  };
  equipNewArmor(newArmor)
  {
    this.equippedArmor=newArmor;
  };
  rest()
  {
    this.currentHealth=this.maxHealth;
    this.isIncapacitated=false;
  };
};

const checkClass=function(hero,characterClass)
{
  let lowerCharacterClass=characterClass.toLowerCase();

  switch (lowerCharacterClass) {
    case `warrior`:
      hero.skills.attack+=3;
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
      hero.skills.attack--;
      hero.skills.sneak+=3;
      hero.skills.tackle++;
      break;
    case `hunter`:
      hero.skills.attack+=3;
      hero.skills.sneak++;
      hero.skills.tackle--;
      hero.skills.mana--;
      break;
    case `slave`:
      hero.skills.attack--;
      hero.skills.sneak+=3;
      hero.skills.tackle++;
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
    case `demon`:
        hero.skills.attack++;
        hero.barriers.attack++;
        hero.skills.mana++;
        hero.barriers.sneak--;
        break;
    default:
        race=prompt(`${race} is not a valid race. Please choose again`);
        hero.race=race;
        checkRace(hero,race);
        break;
  }
};

class Monster extends BaseCharacter
{
  constructor(name,health,attackBarrier,manaBarrier,sneakBarrier,tackleBarrier,skills,minDamage,maxDamage)
  {
    super(name, health, skills);
    this.barriers.attackBarrier=attackBarrier;
    this.barriers.manaBarrier=manaBarrier;
    this.barriers.sneakBarrier=sneakBarrier;
    this.barriers.tackleBarrier=tackleBarrier;
    this.equippedWeapon={
      minDamage:minDamage,
      maxDamage:maxDamage
    }

  };
};
