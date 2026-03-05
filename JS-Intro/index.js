   function resultAll(arr) {
    let result = 0;
   for (let k = 0; k < arr.length; k++) {
     for (let m = 0; m < arr[ k ].length; m++) {
      if( arr[ k ][ m ] % 2 == 0 ) result += ( arr[ k ][ m ] );
     }
   }
      console.log(result);
    }
    
    resultAll ( [ [1, 2], [3, 4], [5, 6, 7] ] );