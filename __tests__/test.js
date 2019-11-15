import {GalacticAge} from './../src/galacticAgeCalculator.js';
describe('GalacticAge',()=> {
    
    test('should correctly creat GalcticAge object with two parameters.',()=>{
        let ageObject = new GalacticAge(20,18);
        expect(ageObject.age).toEqual(20);
        expect(ageObject.lifeExpectancy).toEqual(18);
     });
     

});