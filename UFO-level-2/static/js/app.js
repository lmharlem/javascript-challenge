// from data.js
var tableData = data;

// Use D3 to select the table
var table1 = d3.select("#ufo-table");
// Use D3 to select the table body
var tableBody = d3.select("tbody");

// adding data into table

tableData.forEach((report) => {
    var row = tableBody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var filterButton = d3.select("#filter-btn")
var clearButton = d3.select('#clear-btn')


// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", runEnter);
clearButton.on('click', runClear);
// form.on("change",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // tableBody.remove()
    
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
  
    console.log("date entered:", dateValue);
    console.log("city entered:", cityValue);
    console.log("state entered:", stateValue);
    console.log("country entered:", countryValue);
    console.log("shape entered:", shapeValue);  

    //Running if/else statements to only filter by fields that have a value. If there is no value in the field,
    // changing the name of the list to add to the table body.
      
    if (dateValue != '') {
      var filteredByDate = tableData.filter(report => report.datetime === dateValue);
    }
    else {
      filteredByDate = tableData;
    }
    if (cityValue != '') {
        var filteredByCity = filteredByDate.filter(report => report.city === cityValue);
    }
    else {
      filteredByCity = filteredByDate;
    }
    if (stateValue != '') {
      var filteredByState = filteredByCity.filter(report => report.state === stateValue);
    }
    else {
      filteredByState = filteredByCity;
    }
    if (countryValue != '') {
      var filteredByCountry = filteredByState.filter(report => report.country === countryValue);
    }
    else {
      filteredByCountry = filteredByState;
    }
    if (shapeValue != '') {
      var filteredData = filteredByCountry.filter(report => report.shape === shapeValue);
    }
    else {
      filteredData = filteredByCountry;
    }
    
    console.log('filteredData:', filteredData);

    // Clearing table
    tableBody.html('')

    // Adding filtered values to the table
    filteredData.forEach((report) => {
        var row = tableBody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  
};

// function definition for clearing the filters and replacing the table with all data.

function runClear() {
  // Clearing values in the inputs (placeholder goes back)
  inputDate = d3.select("#datetime").property("value", '');
  inputCity = d3.select("#city").property("value", '');
  inputState = d3.select("#state").property("value", '');
  inputCountry = d3.select("#country").property("value", '');
  inputShape = d3.select("#shape").property("value", '');

  // Clear filtered table
  tableBody.html('')

  // Adding back original table
  tableData.forEach((report) => {
    var row = tableBody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}