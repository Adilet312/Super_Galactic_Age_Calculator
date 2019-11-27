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
     console.log(lifeEx,age);
     let galactic_ages = new GalacticAge(age,lifeEx);
     console.log(galactic_ages.ageOfMercury());
     let array = galactic_ages.listAgeOfPlanets();
     $("#mercury").text(array[0]);
     $("#venus").text(array[1]);
     $("#mars").text(array[2]);
     $("#jupiter").text(array[3]);
     });
    });
