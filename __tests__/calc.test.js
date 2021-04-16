import AgeChart from './../src/js/calc.js';

describe('AgeChart', () => {
  
  it('should correctly construct a new chart with 5 attributes', () => {
    const currentAgeChart = new AgeChart(1, 2, 3, 4, {});
    expect(currentAgeChart.mercury).toEqual(1);
    expect(currentAgeChart.venus).toEqual(2);
    expect(currentAgeChart.mars).toEqual(3);
    expect(currentAgeChart.jupiter).toEqual(4);
    expect(currentAgeChart.left).toEqual({});

  })
})