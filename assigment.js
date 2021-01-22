



// problem solving-1 //


function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var programmingMeter = kilometerToMeter(5);
console.log(programmingMeter);




// problem solving-2 //


function budgetCalculator(watch, phone, laptop) {
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var result = watchPrice + phonePrice + laptopPrice;
  return result;
}
var sum = budgetCalculator(2, 4, 2);
console.log(sum);




// problem solving-3 //



function hotelCost(stay) {
  var amount = 0;
  if (stay <= 10) {
    amount = stay * 100;
  }
  else if (stay <= 20) {
    var firstTimeCost = 10 * 100;
    var remaining = stay - 10;
    var secondTimeCoat = remaining * 80;
    amount = firstTimeCost + secondTimeCost;
  }
  else {
    var firstTimeCost = 10 * 100;
    var secondTimeCoat = 10 * 80;
    var remaining = stay - 20;
    var thiedTimeCost = remaining * 50;
    amount = firstTimeCost + secondTimeCoat + thiedTimeCost;

  }
  return amount;

}
var count = hotelCost(24);
console.log(count);




// problem solving-4 //



function megaFriend(array) {
  var longestName = "";

  array.forEach(function (word) {
    if (word.length > longestName.length) {
      longestName = word;
    }
  });

  return longestName;
}

var word = megaFriend(["JHANKAR MAHBUB VAI", "RASEL VAI", "KARINA APU", "SHAJEDUL VAI", "KARIM VAI", "SUFI VAI"]);
console.log(word);



