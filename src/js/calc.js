export default class AgeChart {
  
  constructor(earth, mercury, venus, mars, jupiter, expectency) {
  this.earth = earth
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  this.expectency = []
  }

  convertToMercury() {
  this.mercury = Math.round(this.earth / .24)
  }

  convertToVenus() {
  this.venus = Math.round(this.earth / .62)
  }

  convertToMars() {
  this.mars = Math.round(this.earth / 1.88)
  }

  convertToJupiter() {
  this.jupiter = Math.round(this.earth / 11.86)
  }
}