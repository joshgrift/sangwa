/* Sangwa Text Encoder */
/* DotJersh.GitHub.io/sangwa/ */

var sangwa = {
  array: "~!1@2#3$4%5^6&7*8(9)0_-=+ qQwWeErRtTyYuUiIoOpP[{]}\\|aAsSdDfFgGhHjJkKlL;:\"'zZxXcCvVbBnNmM,<.>/?",
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
      return (this.array + this.array).split('');
    }
  }
}

sangwa.encode = function(value){
  var result = "";

  var rand = Math.floor(Math.random() * 6) + 2;

  value = "A" + value;

  for(var i = 0; i < value.length; i++){
    result += sangwa.key(sangwa.key(value[i]) + rand);
  }

  return result;
}

sangwa.decode = function(value){
  var result = "";

  var rand = parseInt(sangwa.key(value[0]) - sangwa.key("A"));

  for(var i = 1; i < value.length; i++){
    result += sangwa.key(sangwa.key(value[i]) - rand);
  }

  return result;
}
