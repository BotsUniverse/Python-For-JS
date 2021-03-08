/*
A script of the programmers who have used PYTHON and are now wsing JAVASCRIPT
This script has some of the built-in function of python as the javascript functions
that will make you feel easier with JAVASCRIPT.

Available Functions:
  1. str(value)
  2. int(value)
  3. sum(iretable_list)
  4. max(*args)
  5. min(*args)
  6. abs(number)
  7. len(iritables)
  8. format(text, format_specs)
  9. zip(Arrays)
  10. round(number)
  11. strip(string)
  12. print(*args)
  13. upper(string)
  14. lower(string)
  15. any(iritables)
  15. all(iritables)
  16. input(message)
  17. join(string, item)
  18. splitlines(string)
  19. append(list, item)

--All functions are made just to resemble the functions in python
--some may or may not work in the same way as the python's function does
--so if you can please modify it and reply the modifications at: replyerrors.parvat@gmail.com
*/

function str(value = 7 || 7.7 || '7'){
  //A 'str' function that changes 
  //any value into string
  return String(value);
}

function int(value = '7' || 7.7){
  //A 'int' function that changes
  //the string into integet
  return parseInt(value);
}

function sum(iretables_list = []){
  //returns the sum of the given items in the iterable
  var total = 0;
  var iretables = iretables_list;
  var item;
  for (item in iretables){
    total += iretables[item];
  }
  return total;
}

function max(){
  //A function that returns the maximum
  // valu of the inputed values
  var i;
  var maxim = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxim) {
      maxim = arguments[i];
    }
  }
  return maxim;
}

function min(){
  //A function that returns the minimum
  // valu of the inputed values
  var i;
  var minimum = +Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
      minimum = arguments[i];
    }
  }
  return minimum;
}

function abs(number = 7){
  //returns the absolute value of the given number
  return Math.abs(number);
}

function len(iretables = []){
  //Returns the lengeth of the iretable or the string given.
  var count = 0
  for (a in iretables){
    count ++
  }
  return count
}

function format(value = '', format_specs = []){
  //The format function that replaces the '{}' with its
  //respective element in the 'format_specs'.
  var fs = format_specs;
  var text = value;

  if (typeof(fs) !== 'object'){
    fs = Array(fs);
  };
  if (typeof(text) !== 'string'){
    text = String(text);
  };
  var splt_txt = text.split(" ");

  var rslt_txt = '';
  var num = 0;

  for (var x = 0; x < splt_txt.length; x++){
    var txt_to_add = splt_txt[x];
    if (splt_txt[x] === '{}'){
      txt_to_add = format_specs[num];
      num ++;
    };
    rslt_txt = rslt_txt + String(txt_to_add) + ' ';
  }
  return rslt_txt;
}

function zip(){
  //The function zip that joins the given arrays.
  //Thanks to 'ninjagecko' from Stackoverflow
  //For this function: link: https://stackoverflow.com/users/711085/ninjagecko
  //Function link: https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
  var args = [].slice.call(arguments);
  var shortest = args.length==0 ? [] : args.reduce(function(a,b){
    return a.length<b.length ? a : b
  });

  return shortest.map(function(_,i){
    return args.map(function(array){return array[i]})
  });
}

function round(number = 7.7){
  //Returns the nearest rounded number
  return Math.round(number);
}

function strip(string){
  return trim(string)
}

function print(){
  for (var a = 0; a < arguments.length; a++){
    console.log(arguments[a])
  }
}

function upper(string = ''){
  return string.toLowerCase()
}

function lower(string = ''){
  return string.toLowerCase()
}

function any(iritable = []){
  for (var i = 0; i < iritable.length; i++){
    if (iritable[i]){
      return true
    }
    else{
      if (i === iritable.length - 1){
        return false
      }
      continue
    }
  }
}

function all(iritable = []){
  for (var i = 0; i < iritable.length; i++){
    if (iritable[i]){
      if (i === iritable.length - 1){
        return true
      }
      continue
    }
    else{
      return false
    }
  }
}

function bool(value){
  return Boolean(value)
}

function input(value){
  var inp = prompt(str(value));
  return inp
}
/*
UNDER CONS
function capitalise(string){
  var str_list = string.split(" ")
  print(str_list)
  var text = '';
  for (var i = 0; i < str_list; i++){
    for (var j = 0; j < len(str_list[i]); j++){
      if (j < 1){
        text += upper(str_list[i][j])
      }
      else{
        text += str_list[i][j]
      }
    }
  }
  return text
}

print(capitalise('h a n'))
*/
function join(string = '', item = ''){
  sting = str(string)
  sting += str(item)
  return sting
}

function splitlines(string = ''){
  var string = string
  var my_list = []
  for (var i = 0; i < string.split('\n').length; i++) {
    my_list.push(string.split('\n')[i])
  }
  return my_list
}

function append(list = [], append_list = false){
  var list = list;
  var append_list = append_list;
  for (var i = 0; i < arguments.length; i++){
    if (i !== 0){
      list.push(arguments[i]);
    }
  }
  return list
}