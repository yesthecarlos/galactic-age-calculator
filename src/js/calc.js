export default class AgeChart {
  
  constructor(earth, mercury, venus, mars, jupiter, expectency) {
  this.earth = earth
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  this.expectency = expectency
  }

  convertToMercury() {
  this.mercury = this.earth * .24
  }

  convertToVenus() {
  this.venus = this.earth * .62
  }

  convertToMars() {
  this.mars = this.earth * 1.88
  }

  convertToJupiter() {
  this.jupiter = this.earth * 11.86
  }
}