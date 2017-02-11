var sangwa = {
  array: "~!1@2#3$4%5^6&7*8(9)0_-=+  qQwWeErRtTyYuUiIoOpP[{]}\\|aAsSdDfFgGhHjJkKlL;:\"'zZxXcCvVbBnNmM,<.>/?",
  key: function(value){
    var a = this.array + this.array;
    if(typeof value === "string"){
      return this.array.indexOf(value);
    } else if(typeof value === "number"){
      if(value >= 0){
        return a[value];
      } else {
        return a[this.array.length + value];
      }
    } else {
      return this.array + this.array;
    }
  }
}

sangwa.to = function(value){
  //values
  value = "A" + value;
  var result = "";
  var randFiller ="";
  var randSqnc = ["#","A","@","&","t"];
  var r = 0;

  var d = Math.floor(Math.random() * 50);

  //convert into ASCII
  for (var i = 0; i < value.length; i++) {
      r = Math.floor(Math.random() * 5);
      randFiller = randSqnc[r];
      result += value[i].charCodeAt(0) + d + "" + randFiller;
  }

  //publish result
  return result;
}

sangwa.from = function(value){
  //values
  var result = "";
  var randFiller ="";
  var randSqnc = ["#","A","@","&","t"];
  var r = 0;

  value = value.replace(/#/g, ".");
  value = value.replace(/A/g, ".");
  value = value.replace(/@/g, ".");
  value = value.replace(/&/g, ".");
  value = value.replace(/t/g, ".");

  value = value.split('.');

  var x = parseInt(value[0]) - 65;

  //convert into ASCII
  for (var i = 1; i < value.length-1; i++) {
      result += String.fromCharCode(parseInt(value[i]) - x);
  }

  return result;
}

sangwa.compress = function(value){
  var result = "";

  var rand = Math.floor(Math.random() * 6) + 2;

  value = "A" + value;

  for(var i = 0; i < value.length; i++){
    result += sangwa.key(sangwa.key(value[i]) + rand);
  }

  return result;
}

sangwa.decompress = function(value){
  var result = "";

  var rand = parseInt(sangwa.key(value[0]) - sangwa.key("A"));

  for(var i = 1; i < value.length; i++){
    result += sangwa.key(sangwa.key(value[i]) - rand);
  }

  return result;
}

sangwa.zip = function(value){
  var result = sangwa.compress(value);
  var keys = "";
  var hash = 0;

  for(var i = 1; i < result.length; i++){
    for(var i2 = i + 2; i2 < result.length; i2++){
      for(var u = 50; u >= 10;u--){
        var first = result.substring(i,i + u);
        var second = result.substring(i2,i2 + u);

        if(first == second && first.indexOf("`") < 0){
          while(result.indexOf(first) >= 0){
            result = result.replace(first,"`" + hash + "`");
          }

          keys = hash + "`" + first + "`" + keys;

          hash++;
        }
      }
    }
  }

  result = keys + "¡" + result

  return result;
}

function cArray(array){
  var newarray = new Array();

  for(var i = 0; i < array.length; i++){
    if(array[i]){
      newarray.push(array[i]);
    }
  }

  return newarray;
}

sangwa.unzip = function(value){
  value = value.split("¡");

  var result = value[1];
  var keys = value[0];

  keys = cArray(keys.split("`"));

  for(var i = 0; i < keys.length; i = i + 2){
    while(result.indexOf("`" + keys[i] + "`") >= 0){
      result = result.replace("`" + keys[i] + "`",keys[i+1]);
    }
  }

  result = sangwa.decompress(result);

  return result;
}
