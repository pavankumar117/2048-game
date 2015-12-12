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
      shiftleft();
      return false;
    }
  });
    // 38 for up arrow
  $(document).keydown(function(e){
    if (e.keyCode == 38) {
      //printnumbers();
      shiftup();
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
      shiftbottom();
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

// Funcion for moving elements to left side
function shiftleft() {
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      var value = mytable1.rows[i].cells[j].innerHTML;
      // If values are equal to null
      if ( value === "") {
        //var tempi = i;
        var tempj = j;
        for (var k = j+1; k < 4; k++ ) {
          var value0 = mytable1.rows[i].cells[k].innerHTML;
          if ( value0 !== "" && value === value0) {
            console.log('check in value0 not equal to null and val == val');
            var x = parseInt(value);
            var y = parseInt(value0);
            var val = (x+y);
            mytable1.rows[i].cells[k].innerHTML ="";
            mytable1.rows[i].cells[tempj].innerHTML =val;

          }
          if ( value0 !== "" && value !== value0) {
            console.log('check in value0 not equal to null and val !not= val');
            mytable1.rows[i].cells[k].innerHTML ="";
            mytable1.rows[i].cells[tempj].innerHTML =value0;
          }
        }
      } else if (value !== "" ) {
        console.log('in temp value !not== null');
          var tempm = i;
          var tempn = j;
          for (var l = j+1; l < 4; l++) {
            var value1 = mytable1.rows[i].cells[l].innerHTML;
            if (value1 !== "" & value === value1) {
              var m = parseInt(value);
              var n = parseInt(value1);
              var value2 = (m+n);
              mytable1.rows[i].cells[l].innerHTML="";
              mytable1.rows[i].cells[tempn].innerHTML=value2;
            }
            if (value1 !== "" && value !== value1) {
              mytable1.rows[i].cells[l].innerHTML="";
              mytable1.rows[i].cells[l].innerHTML =value1;
            }
          }
        }
      }
    }
}

function shiftright() {

}

function shifttop() {

}

function shiftbottom() {

}
