# _Super Galactic Age Calculator_

#### _TDD and JavaScript environments learning project_

#### By _**Carlos Mendez**_

## Technologies Used

* JavaScript
* Markup
* Jest
* Webpack

## Description

_This project demonstrates TDD and JavaScript environment setup practices. The app would allow the user to input their age and their life expectancy. It returns the user age (and difference between their age and their life expectancy) in Mercury years, Venus years, Mars years and Jupiter years._

## Setup/Installation Instructions

* _Navigate to the main page of the repository (https://github.com/yesthecarlos/galactic-age-calculator)_
* _Click the large green Code button at the top rightmost corner of the list of files._
* _Click "Use GitHub CLI", then click the clipboard icon._
* _Open Terminal and change the directory to your desired location._
* _Type_ <code>$ git clone https://github.com/yesthecarlos/galactic-age-calculator.git</code> _and press Enter._
* _Open the directory in VS Code or your preferred program._
* _Run <code>$npm install</code> to install the required packages and dependencies._
* _Run <code>$npm run build</code> to build the project._
* _Run <code>$npm run test</code> to run the jest test suite._

## Specs
 
### Describe AgeChart()

  let currentAgeChart;

  beforeEach(() => {
    currentAgeChart = new AgeChart(50);
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
  });
  
  it('should return the number of years the user has lived past the average life expectancy, if applicable', () => {
    let longevalAgeChart = new AgeChart(120);
    let borrowedTime = longevalAgeChart.lifeExpectancy();
    expect(borrowedTime).toEqual([20, 83, 32, 11, 2]);
  })

})

## Feature Plans

* _A UI will be helpful for entering the user's data_

## License

_Copyright 2021 Carlos Mendez_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_

## Contact Information

_carlosmendez86@gmail.com_