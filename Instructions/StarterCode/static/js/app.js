// from data.js
var tableData = data;

      var datetime = tableData.map(row=>row.datetime);
      var city = tableData.map(row=>row.city);
      var state = tableData.map(row=>row.state);
      var country = tableData.map(row=>row.country);
      var shape = tableData.map(row=>row.shape);
      var duration = tableData.map(row=>row.durationMinutes);
      var comment = tableData.map(row=>row.comments);
//      buildTable(date/time, city, state, country, shape, comment);

//function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
    // YOUR CODE HERE
    var tbody = d3.select("tbody");
  
    for (var i=0; i<tableData.length; i++){
      var row = tbody.append("tr");
      var cell1 = tbody.append("td").text(datetime[i]);
      var cell2 = tbody.append("td").text(city[i]);
      var cell3 = tbody.append("td").text(state[i]);
      var cell4 = tbody.append("td").text(country[i]);
      var cell5 = tbody.append("td").text(shape[i]);
      var cell6 = tbody.append("td").text(duration[i]);
      var cell7 = tbody.append("td").text(comment[i]);
      };

 //   }

// YOUR CODE HERE!

var button1=d3.select('#filter-btn-date');
var button2=d3.select('#filter-btn-city');
var button3=d3.select('#filter-btn-state');
var button4=d3.select('#filter-btn-country');
var button5=d3.select('#filter-btn-shape');

function handleClick1(){
    d3.event.preventDefault();

    clear=tbody.html('');
    console.log(inputValue);

    var inputField=d3.select('#datetime');

    var inputValue=inputField.property('value');

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    console.log(filteredData);
    var datetime = filteredData.map(row=>row.datetime);
      var city = filteredData.map(row=>row.city);
      var state = filteredData.map(row=>row.state);
      var country = filteredData.map(row=>row.country);
      var shape = filteredData.map(row=>row.shape);
      var duration = filteredData.map(row=>row.durationMinutes);
      var comment = filteredData.map(row=>row.comments);

    for (var i=0; i<tableData.length; i++){
        var row = tbody.append("tr");
        var cell1 = tbody.append("td").text(datetime[i]);
        var cell2 = tbody.append("td").text(city[i]);
        var cell3 = tbody.append("td").text(state[i]);
        var cell4 = tbody.append("td").text(country[i]);
        var cell5 = tbody.append("td").text(shape[i]);
        var cell6 = tbody.append("td").text(duration[i]);
        var cell7 = tbody.append("td").text(comment[i]);
        };
}

function handleClick2(){
    d3.event.preventDefault();

    clear=tbody.html('');
    console.log(inputValue);

    var inputField=d3.select('#city');

    var inputValue=inputField.property('value');

    var filteredData = tableData.filter(row => row.city === inputValue);

    console.log(filteredData);
    var datetime = filteredData.map(row=>row.datetime);
      var city = filteredData.map(row=>row.city);
      var state = filteredData.map(row=>row.state);
      var country = filteredData.map(row=>row.country);
      var shape = filteredData.map(row=>row.shape);
      var duration = filteredData.map(row=>row.durationMinutes);
      var comment = filteredData.map(row=>row.comments);

    for (var i=0; i<tableData.length; i++){
        var row = tbody.append("tr");
        var cell1 = tbody.append("td").text(datetime[i]);
        var cell2 = tbody.append("td").text(city[i]);
        var cell3 = tbody.append("td").text(state[i]);
        var cell4 = tbody.append("td").text(country[i]);
        var cell5 = tbody.append("td").text(shape[i]);
        var cell6 = tbody.append("td").text(duration[i]);
        var cell7 = tbody.append("td").text(comment[i]);
        };
}

function handleClick3(){
    d3.event.preventDefault();

    clear=tbody.html('');
    console.log(inputValue);

    var inputField=d3.select('#state');

    var inputValue=inputField.property('value');

    var filteredData = tableData.filter(row => row.state === inputValue);

    console.log(filteredData);
    var datetime = filteredData.map(row=>row.datetime);
      var city = filteredData.map(row=>row.city);
      var state = filteredData.map(row=>row.state);
      var country = filteredData.map(row=>row.country);
      var shape = filteredData.map(row=>row.shape);
      var duration = filteredData.map(row=>row.durationMinutes);
      var comment = filteredData.map(row=>row.comments);

    for (var i=0; i<tableData.length; i++){
        var row = tbody.append("tr");
        var cell1 = tbody.append("td").text(datetime[i]);
        var cell2 = tbody.append("td").text(city[i]);
        var cell3 = tbody.append("td").text(state[i]);
        var cell4 = tbody.append("td").text(country[i]);
        var cell5 = tbody.append("td").text(shape[i]);
        var cell6 = tbody.append("td").text(duration[i]);
        var cell7 = tbody.append("td").text(comment[i]);
        };
}

function handleClick4(){
    d3.event.preventDefault();

    clear=tbody.html('');
    console.log(inputValue);

    var inputField=d3.select('#country');

    var inputValue=inputField.property('value');

    var filteredData = tableData.filter(row => row.country === inputValue);

    console.log(filteredData);
    var datetime = filteredData.map(row=>row.datetime);
      var city = filteredData.map(row=>row.city);
      var state = filteredData.map(row=>row.state);
      var country = filteredData.map(row=>row.country);
      var shape = filteredData.map(row=>row.shape);
      var duration = filteredData.map(row=>row.durationMinutes);
      var comment = filteredData.map(row=>row.comments);

    for (var i=0; i<tableData.length; i++){
        var row = tbody.append("tr");
        var cell1 = tbody.append("td").text(datetime[i]);
        var cell2 = tbody.append("td").text(city[i]);
        var cell3 = tbody.append("td").text(state[i]);
        var cell4 = tbody.append("td").text(country[i]);
        var cell5 = tbody.append("td").text(shape[i]);
        var cell6 = tbody.append("td").text(duration[i]);
        var cell7 = tbody.append("td").text(comment[i]);
        };
}

function handleClick5(){
    d3.event.preventDefault();

    clear=tbody.html('');
    console.log(inputValue);

    var inputField=d3.select('#shape');

    var inputValue=inputField.property('value');

    var filteredData = tableData.filter(row => row.shape === inputValue);

    console.log(filteredData);
    var datetime = filteredData.map(row=>row.datetime);
      var city = filteredData.map(row=>row.city);
      var state = filteredData.map(row=>row.state);
      var country = filteredData.map(row=>row.country);
      var shape = filteredData.map(row=>row.shape);
      var duration = filteredData.map(row=>row.durationMinutes);
      var comment = filteredData.map(row=>row.comments);

    for (var i=0; i<tableData.length; i++){
        var row = tbody.append("tr");
        var cell1 = tbody.append("td").text(datetime[i]);
        var cell2 = tbody.append("td").text(city[i]);
        var cell3 = tbody.append("td").text(state[i]);
        var cell4 = tbody.append("td").text(country[i]);
        var cell5 = tbody.append("td").text(shape[i]);
        var cell6 = tbody.append("td").text(duration[i]);
        var cell7 = tbody.append("td").text(comment[i]);
        };
}

button1.on('click',handleClick1);
button2.on('click',handleClick2);
button3.on('click',handleClick3);
button4.on('click',handleClick4);
button5.on('click',handleClick5);
