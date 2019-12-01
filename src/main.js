import { GalacticAge } from './galacticAgeCalculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import "./img/main.jpg";
import "./img/mercury.jpg";

$(document).ready(function(){
    $("#formID").submit(function(event){
    event.preventDefault();
        let lifeEx =  $("#lifeExpectancyID").val();
        let age = $("#ageID").val();
        let galactic_ages = new GalacticAge(age,lifeEx);
        let matrix = [];
         if(age<=lifeEx){
            matrix[0] = "Your age is "+galactic_ages.ageOfMercury()+" years in Mercury; You've left to live " +galactic_ages.yearsHavePassedToLiveInMercury()+" years in Mercury;";
            matrix[1] = "Your age is "+galactic_ages.ageOfVenus()+" years in Venus;  You've left to live " +galactic_ages.yearsHavePassedToLiveInVenus()+" years in Venus;";
            matrix[2] = "Your age is "+galactic_ages.ageOfMars()+" years in Mars;  You've left to live " +galactic_ages.yearsHavePassedToLiveInMars()+" years in Mars;";
            matrix[3] = "Your age is "+galactic_ages.ageOfJupiter()+" years in Jupiter;  You've left to live " +galactic_ages.yearsHavePassedToLiveInJupiter()+" years in Jupiter;;";
         }
         else{
            matrix[0] = "Your age is "+galactic_ages.ageOfMercury()+" years in Mercury; You've passed life expecatncy " +galactic_ages.yearsHavePassedToLiveInMercury()+" years in Mercury;";
            matrix[1] = "Your age is "+galactic_ages.ageOfVenus()+" years in Venus;  You've passed life expectancy " +galactic_ages.yearsHavePassedToLiveInVenus()+" years in Venus;";
            matrix[2] = "Your age is "+galactic_ages.ageOfMars()+" years in Mars;  You've passed life expectancy " +galactic_ages.yearsHavePassedToLiveInMars()+" years in Mars;";
            matrix[3] = "Your age is "+galactic_ages.ageOfJupiter()+" years in Jupiter;  You've passed life expectancy " +galactic_ages.yearsHavePassedToLiveInJupiter()+" years in Jupiter;;";
        }
     $("#mercury").text(matrix[0]);
     $("#venus").text(matrix[1]);
     $("#mars").text(matrix[2]);
     $("#jupiter").text(matrix[3]);
     });
    });