"use strict";
import { Card } from "./Card";

export class Unit extends Card {
  power: number;
  res: number;

  constructor(name: string, cost: number, power: number, res: number) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target: Unit): Unit {
    target.res -= this.power;
    return target;
  }
}
