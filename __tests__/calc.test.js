import AgeChart from './../src/js/calc.js';

describe('AgeChart', () => {

  let currentAgeChart;

  beforeEach(() => {
    currentAgeChart = new AgeChart(1, 2, 3, 4, 5, {});
  });
  
  it('should correctly construct a new chart with 6 attributes', () => {
    expect(currentAgeChart.earth).toEqual(1);
    expect(currentAgeChart.mercury).toEqual(2);
    expect(currentAgeChart.venus).toEqual(3);
    expect(currentAgeChart.mars).toEqual(4);
    expect(currentAgeChart.jupiter).toEqual(5);
    expect(currentAgeChart.left).toEqual({});

  });

  it('should correctly convert Earth age to Mercury age', () => {
    currentAgeChart.earth = 100
    currentAgeChart.convertToMercury();
    expect(currentAgeChart.mercury).toEqual(24);
  });
})