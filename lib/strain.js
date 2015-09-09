'use strict';


var strain = {
  keep: function(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(func(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },
  discard: function(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(!func(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}
