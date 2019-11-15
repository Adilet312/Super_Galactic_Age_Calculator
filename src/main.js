import { GalacticAge } from './galacticAgeCalculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
    $("#formID").submit(function(event){
        event.preventDefault();
     let lifeEx =  $("#lifeExpectancyID").val();
     let age = $("#ageID").val();
     console.log(lifeEx,age);
     let galactic_ages = new GalacticAge(lifeEx,age);
     let array = galactic_ages.listAgeOfPlanets();
     let new_array = [];
     for(let index=0; index<array.length; index++){
         new_array.push('<span>'+array[index]+'</span>');
        }
        $("#outputID").html(new_array.join("<br>"));
     });
    });
