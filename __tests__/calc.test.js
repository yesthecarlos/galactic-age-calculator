import AgeChart from './../src/js/calc.js';

describe('AgeChart', () => {

  let currentAgeChart;

  beforeEach(() => {
    currentAgeChart = new AgeChart(1, 2, 3, 4, 5, []);
  });
  
  it('should correctly construct a new chart with 6 attributes', () => {
    expect(currentAgeChart.earth).toEqual(1);
    expect(currentAgeChart.mercury).toEqual(2);
    expect(currentAgeChart.venus).toEqual(3);
    expect(currentAgeChart.mars).toEqual(4);
    expect(currentAgeChart.jupiter).toEqual(5);
    expect(currentAgeChart.expectency).toEqual([]);
  });

  it('should correctly convert Earth age to Mercury age', () => {
    currentAgeChart.earth = 100;
    currentAgeChart.convertToMercury();
    expect(currentAgeChart.mercury).toEqual(24);
  });

  it('should correctly convert Earth age to Venus age', () => {
    currentAgeChart.earth = 100;
    currentAgeChart.convertToVenus();
    expect(currentAgeChart.venus).toEqual(62);
  });

  it('should correctly convert Earth age to Mars age', () => {
    currentAgeChart.earth = 100;
    currentAgeChart.convertToMars();
    expect(currentAgeChart.mars).toEqual(188);
  });

  it('should correctly convert Earth age to Jupiter age', () => {
    currentAgeChart.earth = 100;
    currentAgeChart.convertToJupiter();
    expect(currentAgeChart.jupiter).toEqual(1186);
  })

  // it('should determine how many years a user has left to live on each planet', () => {
  //   currentAgeChart.earth = 50;
  //   currentAgeChart.expectency = 100;
  //   currentAgeChart.lifeExpectancy
  // })


})