export class GalacticAge
{
    constructor(age,lifeExpectancy)
    {
        this.age = age;
        this.lifeExpectancy = lifeExpectancy;
    }

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
        return jupiter_age.toFixed(2);
    }
    yearsHavePassedToLiveInMercury()
    {
        if(this.age<=this.lifeExpectancy)
        {
            let leftToLive = parseFloat((this.lifeExpectancy-this.age)*365)/88.0;
            return leftToLive.toFixed(2);
        }
        else
        {
            let passedLIfeExpectancy = parseFloat((this.age - this.lifeExpectancy)*365)/88.0;
            return passedLIfeExpectancy.toFixed(2);

        }
    }
    yearsHavePassedToLiveInVenus()
    {
        if(this.age<=this.lifeExpectancy)
        {
            let leftToLive = parseFloat((this.lifeExpectancy-this.age)*365)/225.0;
            return leftToLive.toFixed(2);
        }
        else
        {
            let passedLIfeExpectancy = parseFloat((this.age - this.lifeExpectancy)*365)/225.0;
            return passedLIfeExpectancy.toFixed(2);
        }
    }
    yearsHavePassedToLiveInMars()
    {
        if(this.age<=this.lifeExpectancy)
        {
            let leftToLive = parseFloat((this.lifeExpectancy-this.age)*365)/687.0;
            return leftToLive.toFixed(2);
        }
        else
        {
            let passedLIfeExpectancy = parseFloat((this.age - this.lifeExpectancy)*365)/687.0;
            return passedLIfeExpectancy.toFixed(2);
        }
    }
    yearsHavePassedToLiveInJupiter()
    {
        if(this.age<=this.lifeExpectancy)
        {
            let leftToLive = parseFloat(this.lifeExpectancy-this.age)/12.0;
            return leftToLive.toFixed(2);
        }
        else
        {
            let passedLIfeExpectancy = parseFloat(this.age - this.lifeExpectancy)/12.0;
            return passedLIfeExpectancy.toFixed(2);
        }
    }
    
}