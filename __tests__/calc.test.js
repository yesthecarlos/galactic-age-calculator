import AgeChart from './../src/js/calc.js';

describe('AgeChart', () => {

  let currentAgeChart;
  
  beforeEach(() => {
    currentAgeChart = new AgeChart(50);
  });
  
it('should correctly convert Earth age to Mercury age', () => {
    currentAgeChart.convertToMercury();
    expect(currentAgeChart.mercury).toBe(208);
  });

  it('should correctly convert Earth age to Venus age', () => {
    currentAgeChart.convertToVenus();
    expect(currentAgeChart.venus).toBe(81);
  });

  it('should correctly convert Earth age to Mars age', () => {
    currentAgeChart.convertToMars();
    expect(currentAgeChart.mars).toBe(27);
  });

  it('should correctly convert Earth age to Jupiter age', () => {
    currentAgeChart.convertToJupiter();
    expect(currentAgeChart.jupiter).toBe(4);
  });

  it('should determine how many years a user has left to live on each planet', () => {
    currentAgeChart.lifeExpectancy();
    expect(currentAgeChart.expectancy).toEqual([50, 208, 81, 27, 4]);
  });

  it('should return the number of years the user has lived past the average life expectancy, if applicable', () => {
    let longevalAgeChart = new AgeChart(120);
    let borrowedTime = longevalAgeChart.lifeExpectancy();
    expect(borrowedTime).toEqual([20, 83, 32, 11, 2]);
  })

})