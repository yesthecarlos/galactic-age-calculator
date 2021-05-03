export default class AgeChart {
  
  constructor(earth) {
    this.earth = earth
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
    this.expectancy = [];
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
    let userAge = this.earth;
    let userExpectancy = 100;
    let borrowedTime = [];

    this.expectancy.push(userExpectancy - userAge);
    this.expectancy.push(Math.round(userExpectancy/.24 - userAge/.24));
    this.expectancy.push(Math.round(userExpectancy/.62 - userAge/.62));
    this.expectancy.push(Math.round(userExpectancy/1.88 - userAge/1.88));
    this.expectancy.push(Math.round(userExpectancy/11.86 - userAge/11.86));

    this.expectancy.forEach(function(borrowedYear) {
      if (borrowedYear < 0) {
       borrowedTime.push(borrowedYear * -1)
      }
      else {
      return borrowedYear
      }
    });
    return borrowedTime
  }
  
}