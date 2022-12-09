"use strict";
// Card Imports
import { Unit } from "./UnitCard";
import { Effect } from "./EffectCard";

// Unit Cards
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effect Cards
const HardAlgorithm = new Effect(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const UnhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "resilience",
  -2
);
const PairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

// Playing an effect card
function playEffect(target: Unit, effectCard: Effect): Unit {
  return effectCard.effect(target);
}

// Playing an attack Unit to Unit
function playAttack(target: Unit, attacker: Unit): Unit {
  return attacker.attack(target);
}

// playing the game
console.log("--- Red Belt Ninja Starting Stats ---");
console.log(RedBeltNinja);
playEffect(RedBeltNinja, HardAlgorithm);
console.log(
  "Make an instance of 'Hard Algorithm' and play it on 'Red Belt Ninja'"
);
console.log(RedBeltNinja);

console.log("-------------");
console.log("--- Black Belt Ninja Starting Stats ---");
console.log(BlackBeltNinja);
console.log(
  'Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"'
);
playEffect(RedBeltNinja, UnhandledPromiseRejection);
console.log(RedBeltNinja);
console.log(
  'Make an instance of "Pair Programming" and play it on "Red Belt Ninja"'
);
playEffect(RedBeltNinja, PairProgramming);
console.log(RedBeltNinja);

console.log('"Red Belt Ninja" uses the attack method on "Black Belt Ninja"');
playAttack(BlackBeltNinja, RedBeltNinja);
console.log(BlackBeltNinja);
