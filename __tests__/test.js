import {GalacticAge} from './../src/galacticAgeCalculator.js';

   describe('GalacticAge',()=> {
      const ageObject = new GalacticAge(18,20);
      test('should correctly creat GalcticAge object with two parameters.',()=>{
      expect(ageObject.age).toEqual(18);
      expect(ageObject.lifeExpectancy).toEqual(20);
      });
      test('should fail with negative parameters:',()=>{
      expect(ageObject.age).not.toEqual(-20);
      expect(ageObject.lifeExpectancy).not.toEqual(-23);
      });
      /*Testing age in Mercury planet */
      test('should correctly calculate years in Mercury based on age .',()=>{
         expect(ageObject.ageOfMercury()).toEqual("74.66");
      });
      test('should fail years  becasue expected output 74.66 and given number 48.77  in Mercury planet based on age .',()=>{
         expect(ageObject.ageOfMercury()).not.toEqual(48.77);
      });
      test('should correctly calculate how many years left to live in Mercury based on age and life expectancy.',()=>{
         expect(ageObject.yearsHavePassedToLiveInMercury()).toEqual("8.30");
      });
      /*Testing age in Venus planet */
      test('should correctly calculate years in Venus based on age .',()=>{
         expect(ageObject.ageOfVenus()).toEqual("29.20");
      });
      test('should fail years  becasue expected output 29.20 and given number 48.77  in Venus planet based on age .',()=>{
         expect(ageObject.ageOfVenus()).not.toEqual("48.9");
      });
      test('should correctly calculate yhow many years left to live  in Venus based on age and life expectancy.',()=>{
      expect(ageObject.yearsHavePassedToLiveInVenus()).toEqual("3.24");
      });
      /*Testing age in Mars planet */
      test('should correctly calculate years in Mars based on age .',()=>{
         expect(ageObject.ageOfMars()).toEqual("9.56");
      });
      test('should fail years  becasue expected output 9.56 and given number 48.77  in Mars planet based on age .',()=>{
         expect(ageObject.ageOfMars()).not.toEqual("48.9");
      });
      test('should correctly calculate yhow many years left to live  in Mars based on age and life expectancy.',()=>{
      expect(ageObject.yearsHavePassedToLiveInMars()).toEqual("1.06");
      });
      /*Testing age in Jupiter planet */
      test('should correctly calculate years in Jupiter based on age .',()=>{
         expect(ageObject.ageOfJupiter()).toEqual("1.50");
      });
      test('should fail years  becasue expected output 1.50 and given number 48.77  in Jupiter planet based on age .',()=>{
         expect(ageObject.ageOfJupiter()).not.toEqual("48.9");
      });
      test('should correctly calculate yhow many years left to live  in Jupiter based on age and life expectancy.',()=>{
      expect(ageObject.yearsHavePassedToLiveInJupiter()).toEqual("0.17");
      });

});