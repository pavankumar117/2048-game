function myfunction() { //parent function that prints the tabble
  //printting tables
  var mytable = "";
  mytable += "<table border='1' id='mytable1'>";
  mytable += "<td id='c00'></td>";
  mytable += "<td id='c01'></td>";
  mytable += "<td id='c02'></td>";
  mytable += "<td id='c03'></td>";
  mytable += "</tr>";
  mytable += "<tr>";
  mytable += "<td id='c10'></td>";
  mytable += "<td id='c11'></td>";
  mytable += "<td id='c12'></td>";
  mytable += "<td id='c13'></td>";
  mytable += "</tr>";
  mytable += "<tr>";
  mytable += "<td id='c20'></td>";
  mytable += "<td id='c21'></td>";
  mytable += "<td id='c22'></td>";
  mytable += "<td id='c23'></td>";
  mytable += "</tr>";
  mytable += "<tr>";
  mytable += "<td id='c30'></td>";
  mytable += "<td id='c31'></td>";
  mytable += "<td id='c32'></td>";
  mytable += "<td id='c33'></td>";
  $('body').html(mytable);
  for (var i=0; i<2; i++) {
    printnumbers();
  }
  // Keyboard event listener fuctions
    // 37 for left arrow
  $(document).keydown(function(e){
    if (e.keyCode == 37) {
      printnumbers();
      return false;
    }
  });
    // 38 for up arrow
  $(document).keydown(function(e){
    if (e.keyCode == 38) {
      printnumbers();
      return false;
    }
  });

    // 39 for right arrow
  $(document).keydown(function(e){
    if (e.keyCode == 39) {
      //printnumbers();
      shiftright();
    }
  });

    //40 for down arrow
  $(document).keydown(function(e) {
    if (e.keyCode == 40) {
      test();
      //printnumbers();
      return false;
    }
  });
}



function printnumbers() {
  var arr = [2,4];
  var arr1 = arr[Math.floor(Math.random()*arr.length)];
  var arrrandom = Math.ceil(Math.random()*arr)+1;
  var number=2;
  var row=4;
  var col=4;
  var numberrow = Math.ceil(Math.random()*row)-1;
  var numbercol = Math.ceil(Math.random()*col)-1;
  var cellvalue = mytable1.rows[numberrow].cells[numbercol].innerHTML;
  if (cellvalue === "") {
    mytable1.rows[numberrow].cells[numbercol].innerHTML=arr1;
  } else {
    printnumbers();
  }
}


function test() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {

      /*
      var valuetemp = value;
      mytable1.rows[i].cells[(j)].innerHTML="";
      if (valuetemp !== "") {
        console.log(value + "row" + i + "cell" +j);
        if (i === 0) {
          i=i+3;
          mytable1.rows[i].cells[j].innerHTML=value;
        }
        if (i === 1) {
          i=i+2;
          mytable1.rows[i].cells[j].innerHTML=value;
        }
        if (i === 2) {
          i=i+1;
          mytable1.rows[i].cells[j].innerHTML=value;
        }
        if (i === 3) {
          console.log('already at the end');
        }*/
        if(i !== "") {
          var value = mytable1.rows[i].cells[j].innerHTML;
          console.log('value here is one');
          console.log(value+"i"+i+"j"+j);
          var valuetemp = value;
        }
        if(i === 0) {
          i=i+3;
          mytable1.rows[i].cells[j].innerHTML=valuetemp;
        }
    }
  }
}




/* code that replaces the text in the element */
function shiftleft() {
  for(var i = 0; i < 4; i++) {
    if(i === "") {
      for(var j = i+1; j < 4; j++) {
        if(j !== 0){
          
        }
      }
    }
  }
}
