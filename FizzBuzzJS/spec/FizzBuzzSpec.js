describe("FizzBuzz", function(){

  var fizzbuzz

  describe("knows when a number", function(){

    it("is divisible by three", function(){
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisbleByThree(3)).toContain('fizz');
    });

    it("is NOT divisible by 3", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisbleByThree(1)).toContain('This number is not divisable by three, please try again');
    })

    it("is divisible by five", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisableByFive(5)).toContain('buzz')
    });

    it("is NOT divisible by five", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisableByFive(1)).toContain('This number is not divisable by five, please try again')
    });

    it("is divisable by three and five", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisableByThreeAndByFive(15)).toContain('fizzbuzz')
    });

    it("is NOT divisable by three and five", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisableByThreeAndByFive(2)).toContain('Please try again')
    });

  });
});
