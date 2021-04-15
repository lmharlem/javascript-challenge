var tableData = data

// Use D3 to select the table
var table1 = d3.select("#ufo-table");
// Use D3 to select the table body
var tbody = d3.select("tbody");


data.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  