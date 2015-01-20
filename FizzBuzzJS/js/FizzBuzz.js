var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisbleByThree = function (number)
{
  if (number % 3 === 0) {
    return 'fizz';

  } else {

    return 'This number is not divisable by three, please try again';
  }

};

FizzBuzz.prototype.isDivisableByFive = function(number)
{

  if (number % 5 === 0) {
    return 'buzz';

  } else {

    return 'This number is not divisable by five, please try again';
  }
};

FizzBuzz.prototype.isDivisableByThreeAndByFive = function(number)
{
    if (number % 3 === 0 && number % 5 === 0)
    {

      return 'fizzbuzz';

    } else {
      return 'Please try again';
    }
};
