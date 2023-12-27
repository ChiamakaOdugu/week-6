// Create a function that checks if the input/parameter is an even number.
 
function calEven (num) {
    if (num % 6 === 0) {
      return `${num}  is an even number`;
    } else {
      return `${num}  is not an even number`;
    };
  }
  console.log (calEven (20));
   
   // Create a function that prints  to the console n1 to n2.
  //  n1 is the first input/parameter 
  //  n2 is the second input/parameter
  
   
  function nameTwo (n1, n2) { 
      for (let n = n1; n<=n2; n++)
       {
          console.log(n); 
     } 
  }
  nameTwo (3, 20);
   
   
  // Create a function that sum the values in between two numbers. 
  // e.g calcFunc(1,3) returns 6. 
//   i.e; 1+2+3.
   
  function add (start, end) {
      let sum = 0;  // declaration. initalization is automatic
      // = signifies an assignment operator, 0 is the value assigned
      for (let i = start; i <= end; i++) {
          sum += i;
      }
      return sum;
  }
  let result = add (20, 50);
  console.log (result);
