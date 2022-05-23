// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");
console.log(data);


data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var inputElement = d3.select("#datetime"); 
var inputValue = inputElement.property("value");

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    var row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});

var dates = tableData.map(x=>x.datetime)
var uniqueDates = [...new Set(dates)];
// Append an option in the dropdown
uniqueDates.forEach(function(date) {
    d3.select('#selDate')
        .append('option')
        .text(date)
    });

var cities = tableData.map(x=>x.city)
var uniqueCities = [...new Set(cities)];
// Append an option in the dropdown
uniqueCities.forEach(function(city) {
    d3.select('#selCity')
        .append('option')
        .text(city)
    });

var states = tableData.map(y=>y.state)
var uniqueStates = [...new Set(states)];
// Append an option in the dropdown
uniqueStates.forEach(function(state) {
    d3.select('#selState')
        .append('option')
        .text(state)
    });

var countries = tableData.map(z=>z.country)
var uniqueChountries = [...new Set(countries)];
// Append an option in the dropdown
uniqueChountries.forEach(function(country) {
    d3.select('#selCountry')
        .append('option')
        .text(country)
    });

var shapes = tableData.map(x=>x.shape)
var uniqueshapes = [...new Set(shapes)];
// Append an option in the dropdown
uniqueshapes.forEach(function(shape) {
    d3.select('#selShape')
        .append('option')
        .text(shape)
    });

    var button = d3.select("#filter-btn-2");

    button.on("click", function(event){
        d3.event.preventDefault();
        tbody.html("");
        var dateInput=d3.select("#selDate").property("value");
        var cityInput=d3.select("#selCity").property("value");
        var stateInput=d3.select("#selState").property("value");
        var countryInput=d3.select("#selCountry").property("value");
        var shapeInput=d3.select("#selShape").property("value");
        console.log(cityInput);
    
        var filterData=tableData;
        if (dateInput){
            filterData = filterData.filter(row => row.datetime === dateInput);       
        }
        if (cityInput){
            filterData = filterData.filter(row => row.city === cityInput);       
        }
        if (stateInput){
            filterData = filterData.filter(row => row.state === stateInput);       
        }
        if (countryInput){
            filterData = filterData.filter(row => row.country === countryInput);       
        }
        if (shapeInput){
            filterData = filterData.filter(row => row.shape === shapeInput);       
        }
        
    
        filterData.forEach(function(dateData){
            var row=tbody.append("tr");
            Object.entries(dateData).forEach(function([key,value]){
            var cell=tbody.append("td");
            cell.text(value);
                });
            });
        });
