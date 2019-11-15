export class GalacticAge
{
    
    constructor(age,lifeExpectancy)
    {
        this.age = age;
        this.lifeExpectancy = lifeExpectancy;
    }
    // get age(){ return this.age;}
    // set age(new_age){ this.age = new_age;}

    // get lifeExpectancy(){return this.lifeExpectancy;}
    // set lifeExpectancy(new_lifeExpectancy){this.lifeExpectancy = new_lifeExpectancy;} 
    
    ageOfMercury(){ 
        let mercury_age = parseFloat(this.age*365)/88.0;
        return mercury_age.toFixed(2);
    }

    ageOfVenus()  {
        let venus_age = parseFloat(this.age*365)/225.0; 
        return venus_age.toFixed(2);
    }

    ageOfMars()   {
        let mars_age = parseFloat(this.age*365)/687.0;
        return mars_age.toFixed(2);
    }
    ageOfJupiter(){
       let  jupiter_age = parseFloat(this.age)/12.0;
       console.log(jupiter_age);
        return jupiter_age.toFixed(2);
    }
    listAgeOfPlanets(){
        let matrix = [];
        matrix[0] = "Your age is "+this.ageOfMercury()+" years in Mercury";
        matrix[1] = "Your age is "+this.ageOfVenus()+" years in Venus.";
        matrix[2] = "Your age is "+this.ageOfMars()+" years in Mars.";
        matrix[3] = "Your age is "+this.ageOfJupiter()+" years in Jupiter. ";
        return matrix;
    }


    


                     

        

    

}