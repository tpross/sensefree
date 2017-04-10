var run = (function(){
    /**
     * Eine voellig sinnfreie Funktion ;)
     */

    var space=" "; 
    var storeArray = new Array();
    var beatArray = new Array('POW', 'BIFF', 'SOCK', 'BAM', 'CRUNCH', 'BOFF', 'OOOF', 'WHAP');
    var first = '';
    var output = '';

    var generate3beats = (function() {
      var random = 0;
      var count = beatArray.length;
      var beats = 1;

      while (beats <= 3) {
        random = parseInt(Math.random() * 100);

        if (random < count) {
          output += space + beatArray[random];  
          beats += 1;
        }
      }
    });

    var generateTheme = (function() {
        for (x=0; x<17; x++) {
          if(isNaN('hero'-1)) { first = 'NaN'; };
          if (x % 2 === 0 && x !== 16) { 
              storeArray[x] = first + space; 
          } else {
              if ( x === 16 ) {
                storeArray[16] = " Batman";
              } else {
                storeArray[x] = first;
              }
          } 
        }

        for (x=0; x<17; x++) {
          output = output + storeArray[x];
        }
    });

    generateTheme();
    generate3beats();

    alert(output);
});
