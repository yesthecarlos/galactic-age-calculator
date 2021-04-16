export default class AgeChart {
  
  constructor(earth, mercury, venus, mars, jupiter, expectency) {
  this.earth = earth
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  this.expectancy = []
  }

  convertToMercury() {
  this.mercury = Math.round(this.earth / .24)
  return this.mercury
  }

  convertToVenus() {
  this.venus = Math.round(this.earth / .62)
  return this.venus
  }

  convertToMars() {
  this.mars = Math.round(this.earth / 1.88)
  return this.mars
  }

  convertToJupiter() {
  this.jupiter = Math.round(this.earth / 11.86)
  return this.jupiter
  }

  lifeExpectancy() {
    let userAge = this.earth
    let userExpectancy = 100

    this.expectancy.push(userExpectancy - userAge);
    this.expectancy.push(Math.round(userExpectancy/.24 - userAge/.24));
    this.expectancy.push(Math.round(userExpectancy/.62 - userAge/.62));
    this.expectancy.push(Math.round(userExpectancy/1.88 - userAge/1.88));
    this.expectancy.push(Math.round(userExpectancy/11.86 - userAge/11.86));

  }
}