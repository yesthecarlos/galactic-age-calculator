import AgeChart from './../src/js/calc.js';

describe('AgeChart', () => {

  let currentAgeChart;

  beforeEach(() => {
    currentAgeChart = new AgeChart(50, 0, 0, 0, 0, []);
  });
  
it('should correctly convert Earth age to Mercury age', () => {
    currentAgeChart.convertToMercury();
    expect(currentAgeChart.mercury).toEqual(208);
  });

  it('should correctly convert Earth age to Venus age', () => {
    currentAgeChart.convertToVenus();
    expect(currentAgeChart.venus).toEqual(81);
  });

  it('should correctly convert Earth age to Mars age', () => {
    currentAgeChart.convertToMars();
    expect(currentAgeChart.mars).toEqual(27);
  });

  it('should correctly convert Earth age to Jupiter age', () => {
    currentAgeChart.convertToJupiter();
    expect(currentAgeChart.jupiter).toEqual(4);
  });

  it('should determine how many years a user has left to live on each planet', () => {
    currentAgeChart.lifeExpectancy();
    expect(currentAgeChart.expectancy).toEqual([50, 208, 81, 27, 4]);
  })

})