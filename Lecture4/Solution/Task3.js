class BasicRobot {
  constructor(id, x = 0, y = 0, orientation = 'North') {
      this.id = id;
      this.x = x;
      this.y = y;
      this.orientation = orientation;
      this.step = 1;
  }

  turnClockWise() {
      const directions = ['North', 'East', 'South', 'West'];
      const currentIndex = directions.indexOf(this.orientation);
      this.orientation = directions[(currentIndex + 1) % 4];
  }

  turnAntiClockWise() {
      const directions = ['North', 'West', 'South', 'East'];
      const currentIndex = directions.indexOf(this.orientation);
      this.orientation = directions[(currentIndex + 1) % 4];
  }

  walk() {
      switch (this.orientation) {
          case 'North': this.y += this.step; break;
          case 'East': this.x += this.step; break;
          case 'South': this.y -= this.step; break;
          case 'West': this.x -= this.step; break;
      }
  }

  getPosition() {
      console.log(`${this.id} is at (${this.x}, ${this.y}) facing ${this.orientation}`);
  }
}

class AdvancedRobot extends BasicRobot {
  constructor(id, x = 0, y = 0, orientation = 'North', charge = 10) {
      super(id, x, y, orientation);
      this.charge = charge;
      this.turboState = false;
  }

  turbo() {
      if (this.charge > 0) {
          this.turboState = true;
          console.log(`${this.id} turbo activated!`);
      } else {
          console.log(`${this.id} not enough charge for turbo`);
      }
  }

  walk() {
      if (this.turboState) {
          this.step = 2;
          this.charge--;
          if (this.charge <= 0) {
              this.turboState = false;
              this.step = 1;
              console.log(`${this.id} turbo deactivated - out of charge`);
          }
      } else {
          this.step = 1;
      }
      super.walk();
  }
}

const basic = new BasicRobot('R2D2');
basic.walk();
basic.turnClockWise();
basic.walk();
basic.getPosition();

const advanced = new AdvancedRobot('C3PO');
advanced.turbo();
advanced.walk();
advanced.walk();
advanced.getPosition();
console.log('Remaining charge:', advanced.charge);