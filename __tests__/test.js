import {GalacticAge} from './../src/galacticAgeCalculator.js';
describe('GalacticAge',()=> {
    let ageObject = new GalacticAge(20,18);
    test('should correctly creat GalcticAge object with two parameters.',()=>{
        
        expect(ageObject.age).toEqual(20);
        expect(ageObject.lifeExpectancy).toEqual(18);
     });
     test('should fail with negative parameters:',()=>{
        expect(ageObject.age).toEqual(-20);
        expect(ageObject.lifeExpectancy).toEqual(-23);
     });
     test('should correctly calculate years in Mercury based on age .',()=>{
        expect(ageObject.ageOfMercury()).toEqual(49.77);
     });
     test('should fail years  becasue expected output 49.77 and given number 48.77  in Mercury planet based on age .',()=>{
        expect(ageObject.ageOfMercury()).toEqual(48.77);
     });
     test('should correctly calculate years in Venus based on age .',()=>{
        expect(ageObject.ageOfVenus()).toEqual(19.47);
     });
     test('should fail years  becasue expected output 19.47 and given number 29.77  in Venus planet based on age .',()=>{
        expect(ageObject.ageOfMercury()).toEqual(29.77);
     });
     test('should correctly calculate years in Mars based on age .',()=>{
        expect(ageObject.ageOfMars.toEqual(6.38);
     });
     test('should fail years  becasue expected output 6.38 and given number 4.38  in Mars planet based on age .',()=>{
        expect(ageObject.ageOfMercury()).toEqual(4.38);
     });
     test('should correctly calculate years in Jupiter based on age .',()=>{
        expect(ageObject.ageOfVenus()).toEqual(1);
     });
     test('should fail years  becasue expected output 1 and given number 2  in Jupiter planet based on age .',()=>{
        expect(ageObject.ageOfMercury()).toEqual(2);
     });
     

});