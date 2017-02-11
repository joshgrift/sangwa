var sangwa = {}

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
    result += (String.fromCharCode(value[i].charCodeAt() - rand));
  }

  return result;
}

sangwa.decompress = function(value){
  var result = "";

  var rand = parseInt(65 - value[0].charCodeAt());

  for(var i = 1; i < value.length; i++){
    result += (String.fromCharCode(value[i].charCodeAt() + rand));
  }

  return result;
}
