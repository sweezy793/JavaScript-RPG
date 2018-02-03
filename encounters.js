let tackleEncounter=(heroes,enemies)=>
{
  let tackleBarrier=0;
  let tacklePower=0;
  enemies.forEach(enemy=>{
    tackleBarrier+=enemy.barriers.tackle;
  });
  heroes.forEach(hero=>
  {
    tacklePower+=hero.tackle();
  });
  return tacklePower>=tackleBarrier;
};

let sneakEncounter=(heroes,enemies)=>
{
  let sneakBarrier=0;
  let sneakPower=0;
  enemies.forEach(enemy=>{
    sneakBarrier+=enemy.barriers.sneak;
  });
  heroes.forEach(hero=>
  {
    sneakPower+=hero.sneak();
  });
  return sneakPower>=sneakBarrier;
};

let manaEncounter=(heroes,enemies)=>
{
  let manaBarrier=0;
  let manaPower=0;
  enemies.forEach(enemy=>{
    manaBarrier+=enemy.barriers.mana;
  });
  heroes.forEach(hero=>
  {
    manaPower+=hero.mana();
  });
  return manaPower>=manaBarrier;
};

const fightEncounter=(heroes,enemies,heroesFirst)=>
{
  let fighting=true;
  let totalHeroes=heroes.length;
  let totalEnemies=enemies.length;
  while(fighting)
  {
    if(heroesFirst)
    {
    totalEnemies-=teamAttack(heroes,enemies);
    totalHeroes-=teamAttack(enemies,heroes);
    }
    else {
    totalHeroes-=teamAttack(heroes,enemies);
    totalEnemies-=teamAttack(enemies,heroes);
    }
    if(totalEnemies==0)
    {
      console.log(`All heroes are is incapacitated`);
      return false;
    }
    if(totalEnemies==0)
    {
      console.log(`All enemies have been eliminated`);
      return true;
    }
  }
};

function teamAttack(attackers,defenders)
{
  let totalIncapacitated=0;
  const totalAvailableDefenders=0;
  defenders.forEach(defender=>
  {
    if(!defender.isIncapacitated)
    totalAvailableDefenders++;
  });
  attackers.forEach(attacker=>{
    if(attacker.isIncapacitated||totalAvailableDefenders==0)
    return;
    let target,randomTargetIndex;
    while(!target)
    {
      randomTargetIndex=Math.floor(Math.random()*defenders.length);

      if(!defenders[randomTargetIndex].isIncapacitated)
      target=defenders[randomTargetIndex];
      }
      if(attacker.attack()>=target.barriers.attack)
      {
        let damage=attacker.dealDamage();
        target.currentHealth-=damage;
        console.log(`${attacker.name} (${attacker.currentHealth}) hit ${target.name} (${target.currentHealth}) dealing ${damage} damage!`);
        if(target.currentHealth<=0)
        {
          console.log(`${target.name} is incapacitated!`);
          target.isIncapacitated=true;
          totalIncapacitated++;
          totalAvailableDefenders--;
        }
      }else {
          console.log(`${attacker.name} missed!`);
        }
  });
  return totalIncapacitated;
};

const riddleEncounter=()=>
{
  let answer=prompt(`You can see me in the water, but I never get wet. What am I? `);
  if(answer.toLowerCase()==`a reflection`||`reflection`)
  {
    console.log(`Correct!`);
    return true;
  }
  else
    {
      console.log(`You got it wrong!`);
      return false;
    }

};

const decisionMaker = (answer) => {
 let lowerAnswer = answer.toLowerCase();

 let result;

 switch (lowerAnswer) {
 case `attack`:
 result = fightEncounter(heroParty, enemies, true);
 break;
 case `sneak`:
 result = sneakEncounter(heroParty, enemies);
 break;
 case `tackle`:
 result = tackleEncounter(heroParty, enemies);
 break;
 case `mana`:
 result = manaEncounter(heroParty, enemies);
 break;
 default:
 return decisionMaker(prompt(`Please make sure you spell the choice correctly. Use Attack, Sneak, Tackle or Mana?`));
 break;
 }
 return result;
};
