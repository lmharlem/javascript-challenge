// from data.js
var tableData = data;

// Use D3 to select the table
var table1 = d3.select("#ufo-table");
// Use D3 to select the table body
var tableBody = d3.select("tbody");

// adding data into table

data.forEach((report) => {
    var row = tableBody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select("#filter-btn")
var form = d3.select('form')
var clearButton = d3.select('#clear-btn')

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);
clearButton.on('click', runClear);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // tableBody.remove()
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log("date entered:", inputValue);
      
    var filteredData = tableData.filter(report => report.datetime === inputValue);

    console.log('filteredData:', filteredData);

    tableBody.html('')

    filteredData.forEach((report) => {
        var row = tableBody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

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

