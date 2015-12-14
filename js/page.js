function myfunction() { //parent function that prints the tabble
  //printting tables
  var mytable = "";
  mytable += "<table border='1' id='mytable1'>";
  for ( var row = 0;  row < 4; row++) {
    mytable += "<tr align = 'center'>";
    for(var col = 0; col < 4; col++) {
      mytable += "<td></td>";
    }
    mytable += "</tr>";
  }
  mytable += "</table>";
  $('body').html(mytable);
  for (var i=0; i<2; i++) {
    printnumbers();
  }
  // Keyboard event listener fuctions
    // 37 for left arrow
  $(document).keydown(function(e){
    if (e.keyCode == 37) {
      shiftleft();
      printnumbers();
    }
  });
    // 38 for up arrow
  $(document).keydown(function(e){
    if (e.keyCode == 38) {
      shiftup();
      printnumbers();
    }
  });

    // 39 for right arrow
  $(document).keydown(function(e){
    if (e.keyCode == 39) {
      shiftright();
      printnumbers();
    }
  });

    //40 for down arrow
  $(document).keydown(function(e) {
    if (e.keyCode == 40) {
      shiftbottom();
      printnumbers();
    }
  });
}

//function for printing numbers randomly
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
  if (cellvalue !== "") {
    printnumbers();
  } else if(cellvalue === "") {
    mytable1.rows[numberrow].cells[numbercol].innerHTML=arr1;
  }
}

// Funcion for moving elements to left side
function shiftleft() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var value = mytable1.rows[i].cells[j].innerHTML;
      // If values are equal to null then it stores position of value.
      // It goes to next value of position and check the next value is "" || !""
      if (value === "") {
        var tempj = j; //storing the col value position in tempj
        for (var k = j+1; k < 4; k++) {
          var  tempk = k;
          var value1 = mytable1.rows[i].cells[k].innerHTML;
          if (value1 !== "") {// If value is not null
            console.log("value1 = "+value1);
            console.log("i value = "+i);
            console.log("j value = "+j);
            mytable1.rows[i].cells[k].innerHTML ="";
            mytable1.rows[i].cells[tempj].innerHTML =value1;
            for (var f = k+1; f < 4; f++) {
              var value21 = mytable1.rows[i].cells[f].innerHTML;
              if (value21 !== "") {
                for(var g = f+1; g < 4; g++) {
                  var value31 = mytable1.rows[i].cells[g].innerHTML;
                    if( value1 === value21) {
                      console.log("value21 = "+value21);
                      var x = parseInt(value1);
                      var y = parseInt(value21);
                      var valx = (x+y);
                      console.log('total value'+valx);
                      mytable1.rows[i].cells[k].innerHTML ="";
                      mytable1.rows[i].cells[f].innerHTML ="";
                      mytable1.rows[i].cells[tempj].innerHTML =valx;
                    /*  if (value31 !== "") {
                        mytable1.rows[i].cells[tempg].innerHTML ="";
                        mytable1.rows[i].cells[tempf].innerHTML =value31;
                      } */
                      console.log('printed val'+valx);
                      break;
                    }
                    if(value1 !== value21) {
                      mytable1.rows[i].cells[f].innerHTML ="";
                      mytable1.rows[i].cells[k].innerHTML ="";
                      mytable1.rows[i].cells[tempj].innerHTML =value1;
                      mytable1.rows[i].cells[tempk].innerHTML =value21;
                      /*if (value31 !== "") {
                        mytable1.rows[i].cells[tempg].innerHTML ="";
                        mytable1.rows[i].cells[tempf].innerHTML =value31;
                      } */
                      break;
                    }
                 }
              }
              else {
                mytable1.rows[i].cells[f].innerHTML ="";
                mytable1.rows[i].cells[k].innerHTML ="";
                mytable1.rows[i].cells[tempj].innerHTML =value1;
              }
            }
          }
        }
      } else if (value !== "" ) {  // IF initial value not equal to null
          var tempm = i;
          var tempn = j;
          for (var l = j+1; l < 4; l++) {
            var value2 = mytable1.rows[i].cells[l].innerHTML;
            if (value2 !== "") {
              if (value === value2) {
                var m = parseInt(value);
                var n = parseInt(value2);
                var valy = (m+n);
                mytable1.rows[i].cells[l].innerHTML="";
                mytable1.rows[i].cells[tempn].innerHTML=valy;
                if(l === j+1) {
                  break;
                }
              }
            }
            if (value2 !== "") {
              if(value !== value2) {
                mytable1.rows[i].cells[l].innerHTML="";
                mytable1.rows[i].cells[l].innerHTML =value2;
                break;
              }
           }
        }
      }
    }
  }
}


//Function for moving elements right side
function shiftright() {
  for (var i = 3; i >= 0; i--) {
    for (var j = 3; j >= 0; j--) {
      var value = mytable1.rows[i].cells[j].innerHTML;
      // If values are equal to null then it stores position of value.
      // It goes to next value of position and check the next value is "" || !""
      if ( value === "") {
        var tempj = j; //storing the col value position in tempj
        for (var k = j-1; k >= 0; k-- ) {
          var value1 = mytable1.rows[i].cells[k].innerHTML;
          if (value1 !== "") {// If value is not null
            if (value === value1) {
              var x = parseInt(value);
              var y = parseInt(value1);
              var valx = (x+y);
              mytable1.rows[i].cells[k].innerHTML ="";
              mytable1.rows[i].cells[tempj].innerHTML =valx;
              if(k === j-1) {
                break;
              }
            }
          }
          if (value1 !== "") {
            if (value !== value1) {
              mytable1.rows[i].cells[k].innerHTML ="";
              mytable1.rows[i].cells[tempj].innerHTML =value1;
              break;
            }
          }
        }

      } else if (value !== "" ) {
          var tempm = i;
          var tempn = j;
          for (var l = j-1; l >= 0; l--) {
            var value2 = mytable1.rows[i].cells[l].innerHTML;
            if (value2 !== "") {
              if (value === value2) {
                var m = parseInt(value);
                var n = parseInt(value2);
                var valy = (m+n);
                mytable1.rows[i].cells[l].innerHTML="";
                mytable1.rows[i].cells[tempn].innerHTML=valy;
                if (l === j-1) {
                  break;
                }
              }
            }
            if (value2 !== "") {
              if(value !== value2) {
                mytable1.rows[i].cells[l].innerHTML="";
                mytable1.rows[i].cells[l].innerHTML =value2;
                break;
              }
           }
        }
      }
    }
  }
}
//Function for moving elements up
function shiftup() {
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      var value = mytable1.rows[i].cells[j].innerHTML;
      // If values are equal to null then it stores position of value.
      // It goes to next value of position and check the next value is "" || !""
      if ( value === "") {
        var tempi = i; //storing the col value position in tempj
        for (var k = i+1; k < 4; k++ ) {
          var value1 = mytable1.rows[k].cells[j].innerHTML;
          if (value1 !== "") { // If value is not null
            if (value === value1) { // If value equal to value1
              var x = parseInt(value);
              var y = parseInt(value1);
              var valx = (x+y);
              mytable1.rows[k].cells[j].innerHTML ="";
              mytable1.rows[tempi].cells[j].innerHTML =valx;
              if(k === i+1) {
                break;
              }
            }
          }
          if (value1 !== "") { // If value is not null
            if (value !== value1) { // If value not equals to value 1
              mytable1.rows[k].cells[j].innerHTML ="";
              mytable1.rows[tempi].cells[j].innerHTML =value1;
              break;
            }
          }
        }
      // If value not equals to null
      } else if (value !== "" ) {
          var tempn = i;
          for (var l = i+1; l < 4; l++) {
            var value2 = mytable1.rows[l].cells[j].innerHTML;
            if (value2 !== "") {
              if (value === value2) {
                var m = parseInt(value);
                var n = parseInt(value2);
                var valy = (m+n);
                mytable1.rows[l].cells[j].innerHTML="";
                mytable1.rows[tempn].cells[j].innerHTML=valy;
                if (l === i+1) {
                  break;
                }
              }
            }
            if (value2 !== "") {
              if(value !== value2) {
                mytable1.rows[l].cells[j].innerHTML="";
                mytable1.rows[l].cells[j].innerHTML =value2;
                break;
              }
           }
        }
      }
    }
  }
}
//Function for moving elements down
function shiftbottom() {
  for (var j = 3; j >= 0; j--) {
    for (var i = 3; i >= 0; i--) {
      var value = mytable1.rows[i].cells[j].innerHTML;
      // If values are equal to null then it stores position of value.
      // It goes to next value of position and check the next value is "" || !""
      if ( value === "") {
        var tempi = i; //storing the col value position in tempj
        for (var k = i-1; k >= 0; k-- ) {
          var value1 = mytable1.rows[k].cells[j].innerHTML;
          if (value1 !== "") { // If value is not null
            if (value === value1) { //If value1 equals to value.
              var x = parseInt(value);
              var y = parseInt(value1);
              var valx = (x+y);
              mytable1.rows[k].cells[j].innerHTML ="";
              mytable1.rows[tempi].cells[j].innerHTML =valx;
              if(k === i-1) {
                break;
              }
            }
          }
          if (value1 !== "") {
            if (value !== value1) {
              mytable1.rows[k].cells[j].innerHTML ="";
              mytable1.rows[tempi].cells[j].innerHTML =value1;
              break;
            }
          }
        }
        // If value not equals to null
      } else if (value !== "" ) {
          var tempn = i;
          for (var l = i-1; l >= 0; l--) {
            var value2 = mytable1.rows[l].cells[j].innerHTML;
            if (value2 !== "") { // If value is not null
              if (value === value2) { //If value equals to value2.
                var m = parseInt(value);
                var n = parseInt(value2);
                var valy = (m+n);
                mytable1.rows[l].cells[j].innerHTML="";
                mytable1.rows[tempn].cells[j].innerHTML=valy;
                if (l === i-1) {
                  break;
                }
              }
            }
            if (value2 !== "") {
              if(value !== value2) {
                mytable1.rows[l].cells[j].innerHTML="";
                mytable1.rows[l].cells[j].innerHTML =value2;
                break;
              }
           }
        }
      }
    }
  }
}
