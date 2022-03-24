var req = new XMLHttpRequest();
var jsonResponse;
req.responseType = 'json';
req.open('GET', "https://data.covid19india.org/v4/min/data.min.json", true);
req.onload  = function() {
   jsonResponse = req.response;
   console.log(jsonResponse);
};
req.send(null);


var india_confirmed_no = 00000000;
var india_recovered_no = 00000000;
var india_vaccinated_no = 00000000;
const land = document.querySelectorAll('.land');
const state_name = document.querySelector('.state_name');
const state_confirmed = document.querySelector('.state_confirmed');
const state_recovered = document.querySelector('.state_recovered');
const state_vaccinated = document.querySelector('.state_vaccinated');
const district_dropdown = document.querySelector('.district_dropdown');
const state_dropdown = document.querySelector('.state_dropdown');
const district_confirmed = document.querySelector('.district_confirmed');
const district_recovered = document.querySelector('.district_recovered');
const district_vaccinated = document.querySelector('.district_vaccinated');
const india_confirmed = document.querySelector('.india_confirmed');
const india_recovered = document.querySelector('.india_recovered');
const india_vaccinated = document.querySelector('.india_vaccinated');
var state;
var district;

for(let i=0;i<land.length;i++){
    land[i].setAttribute("onclick", "show(this)");
} 

function show(el){
    state = (el.getAttribute("id"))[3] + (el.getAttribute("id"))[4];
    state_name.innerHTML = el.getAttribute("title");
    state_confirmed.innerHTML = ((jsonResponse[state])["total"])["confirmed"];
    state_recovered.innerHTML = ((jsonResponse[state])["total"])["recovered"];
    state_vaccinated.innerHTML = ((jsonResponse[state])["total"])["vaccinated1"];

    district = Object.keys((jsonResponse[state])["districts"]);

    district.forEach( (el) => {district_dropdown.innerHTML = ``});
    district.forEach( (el) => {district_dropdown.innerHTML += `<option value="${el}">${el}</option>`});

    // if(i==1){
    //     var state_keys = Object.keys(jsonResponse);
    //     state_keys.forEach((el)=>{india_confirmed_no += ((jsonResponse[el])["total"])["confirmed"]});
    //     state_keys.forEach((el)=>{india_recovered_no += ((jsonResponse[el])["total"])["recovered"]});
    //     state_keys.forEach((el)=>{india_vaccinated_no += ((jsonResponse[el])["total"])["vaccinated1"]});
    //     india_confirmed.innerHTML = india_confirmed_no;  
    //     india_recovered.innerHTML = india_recovered_no;  
    //     india_vaccinated.innerHTML = india_vaccinated_no;  
    //     i=0;
    // }
}
var state_titel = document.getElementsByTagName("svg");
for(var i=0; i<30;i++){
    try{
        let name = (((state_titel[0]).getElementsByClassName("land")[i]).getAttribute("title"));
        state_dropdown.innerHTML += `<option id="${i}" value="${name}">${name}</option>`;
    }
    catch(e){break;}
}
var state_keys_1;
var index;
var i=1;
function state_name_data(option){
    state_keys_1 = Object.keys(jsonResponse);
    index = option.selectedIndex; 
    console.log(jsonResponse[state_keys_1[index]]);

    state_name.innerHTML = option.value;
    state_confirmed.innerHTML = ((jsonResponse[state_keys_1[index]])["total"])["confirmed"];
    state_recovered.innerHTML = ((jsonResponse[state_keys_1[index]])["total"])["recovered"];
    state_vaccinated.innerHTML = ((jsonResponse[state_keys_1[index]])["total"])["vaccinated1"];

    district = Object.keys((jsonResponse[state_keys_1[index]])["districts"]);

    district.forEach( (el) => {district_dropdown.innerHTML = ``});
    district.forEach( (el) => {district_dropdown.innerHTML += `<option value="${el}">${el}</option>`});

    if(i==1){
        var state_keys = Object.keys(jsonResponse);
        state_keys.forEach((el)=>{india_confirmed_no += ((jsonResponse[el])["total"])["confirmed"]});
        state_keys.forEach((el)=>{india_recovered_no += ((jsonResponse[el])["total"])["recovered"]});
        state_keys.forEach((el)=>{india_vaccinated_no += ((jsonResponse[el])["total"])["vaccinated1"]});
        india_confirmed.innerHTML = india_confirmed_no;  
        india_recovered.innerHTML = india_recovered_no;  
        india_vaccinated.innerHTML = india_vaccinated_no;  
        i=0;
    }
}
function district_data(option){
    try{
        district_confirmed.innerHTML = (((jsonResponse[state])["districts"][option.value])["total"])["confirmed"];  
        district_recovered.innerHTML = (((jsonResponse[state])["districts"][option.value])["total"])["recovered"];  
        district_vaccinated.innerHTML = (((jsonResponse[state])["districts"][option.value])["total"])["vaccinated1"];
    }
    catch(error) {
        district_confirmed.innerHTML = (((jsonResponse[state_keys_1[index]])["districts"][option.value])["total"])["confirmed"];  
        district_recovered.innerHTML = (((jsonResponse[state_keys_1[index]])["districts"][option.value])["total"])["recovered"];  
        district_vaccinated.innerHTML = (((jsonResponse[state_keys_1[index]])["districts"][option.value])["total"])["vaccinated1"];

    }
}       