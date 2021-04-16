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
    this.expectancy.push(userAge.convertToMercury());
    this.expectancy.push(userExpectancy.convertToVenus() - userAge.convertToVenus());
    this.expectancy.push(userExpectancy.convertToMars() - userAge.convertToMars());
    this.expectancy.push(userExpectancy.convertToJupiter() - userAge.convertToJupiter());

  }
}