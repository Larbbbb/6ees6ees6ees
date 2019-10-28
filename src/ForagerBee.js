class ForagerBee extends Bee {
  // TODO..
  constructor(age = 10, job = 'find pollen', color = 'yellow', canFly = true) {
    super(age, job, color);
    this.canFly = canFly;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
