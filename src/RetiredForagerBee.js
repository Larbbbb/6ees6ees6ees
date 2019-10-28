class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor() {
    super(40, 'gamble', 'grey', false);

  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
