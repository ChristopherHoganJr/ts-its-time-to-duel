"use strict";
import { Card } from "./Card";
import { Unit } from "./UnitCard";

export class Effect extends Card {
  text: string;
  stat: string;
  magnitude: number;

  constructor(
    name: string,
    cost: number,
    text: string,
    stat: string,
    magnitude: number
  ) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  effect(target: Unit): Unit {
    if (this.stat === "power") target.power += this.magnitude;
    if (this.stat === "resilience") target.res += this.magnitude;
    return target;
  }
}
