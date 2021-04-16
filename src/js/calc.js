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

  lifeExpectancy() {
    let userAge = this.earth
    let userExpectancy = 100

    this.expectancy.push(userExpectancy - userAge);
    this.expectancy.push(userExpectancy.convertToMercury() - userAge.convertToMercury());
    this.expectancy.push(userExpectancy.convertToVenus() - userAge.convertToVenus());
    this.expectancy.push(userExpectancy.convertToMars() - userAge.convertToMars());
    this.expectancy.push(userExpectancy.convertToJupiter() - userAge.convertToJupiter());

  }
}