# AliensEyeWitness_Javascript

## Target

ALIENS-R-REAL have collected all of the eye-witness reports to prove the extra-terrestrial menace has come to Earth. I need to Design a web page that will create a table dynamically based upon a [Provided Dataset](static/js/data.js), which can filte the table data for specific conditions. <br/>

[**Click Here**](https://ash-tao.github.io/AliensEyeWitness_Javascript/) to find out how the web page looks like. <br/>


## Step by Step Approch

The wab page has 4 sections:<br/>
- Home<br/>
<img src="https://github.com/Ash-Tao/javascript-challenge/blob/main/output/Home.png"><br/>
- About<br/>
<img src="https://github.com/Ash-Tao/javascript-challenge/blob/main/output/About.png"><br/>
- DarkForestTheory<br/>
<img src="https://github.com/Ash-Tao/javascript-challenge/blob/main/output/DarkForestTheory.png"><br/>
- Search<br/>
<img src="https://github.com/Ash-Tao/javascript-challenge/blob/main/output/Search.png"><br/>

### Step 1 Automatic Table based on the date is input

- Table header: `date/time`, `city`, `state`, `country`, `shape`, and `comment` - HTML file<br/>
  ``` python
   <thead>
   <tr>
     <th class="table-head">Date</th>
     <th class="table-head">City</th>
     <th class="table-head">State</th>
     <th class="table-head">Country</th>
     <th class="table-head">Shape</th>
     <th class="table-head">Duration</th>
     <th class="table-head">Comments</th>
   </tr>
  </thead>
  ```
  
 - Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to web page and then adds new rows of data for each UFO sighting. - JS file<br/>
   ``` python
   data.forEach(function(ufoSighting){
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
        });
    });
    ```

- Listen for events and search through the `date/time` column to find rows that match user input.<br/>
  ``` puthon
  button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

    // get the input data
    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");

    // matches the input date
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(dateData){
        var row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
            });
        });
    });
  ```
### Step 2 Multiple Search Categories

Set multiple dropdowns and search for UFO sightings using the following criteria based on the table columns (example on date):<br/>
- date/time<br/>
- city<br/>
- state<br/>
- country<br/>
- shape<br/>
``` python
var dates = tableData.map(x=>x.datetime)
var uniqueDates = [...new Set(dates)];
// Append an option in the dropdown
uniqueDates.forEach(function(date) {
    d3.select('#selDate')
        .append('option')
        .text(date)
    });
 
 // extrect the data matches the input date
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
    
    // create a new table based on the value we find
    filterData.forEach(function(dateData){
        var row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
            });
        });
});
```

## Files
- [Output](output)<br/>
  - About.png<br/>
  - DarkForestTheory.png<br/>
  - Home.png<br/>
  - Search.png<br/>
  - SearchResult.png<br/>

- [styles.css](https://github.com/Ash-Tao/javascript-challenge/tree/main/static/css)<br/>
- [app.js](https://github.com/Ash-Tao/javascript-challenge/blob/main/static/js/app.js)<br/>
- [data.js](https://github.com/Ash-Tao/javascript-challenge/blob/main/static/js/data.js)<br/>
- [scripts.js](https://github.com/Ash-Tao/javascript-challenge/blob/main/static/js/scripts.js)<br/>

- [img](static/assets/img)<br/>
  - Dark-Forest-Theory.jpg<br/>
  - earth-2.png<br/>
  - masthead-nasa.jpg<br/>
  - table-star.jpg<br/>
