                          //JavaScript Coding Test//    
//Question 1:
function createCounter() {
    let count = 0;
  
    return {
      increment: function () {
        count++;
        return count;
      },
      reset: function () {
        count = 0;
        return count;
      },
    };
  }
  
  // Usage example:
  const counter = createCounter();
  console.log("Question 1a) " + counter.increment()); // 1
  console.log("Question 1b) " + counter.increment()); // 2
  console.log("Question 1c) " + counter.reset());     // 0



//Question 2:  
  function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
  }
  
  // Usage example:
  console.log(greetUser("Question 2a) Alice", "Morning")); // Good Morning, Alice!
  console.log(greetUser("Question 2b) Bob", "Evening"));   // Good Evening, Bob!                



//Question 3:  
  function displayUserInfo({ name = "Unknown", city = "Unknown" } = {}) {
    console.log(`Question 3 Name: ${name}, City: ${city}`);
  }
  
  // Usage example:
  const user = { name: "John", age: 25, city: "New York" };
  displayUserInfo(user); // Name: John, City: New York
  
  // Using defaults:
  displayUserInfo({ name: "Alice" });         // Name: Alice, City: Unknown
  displayUserInfo();                          // Name: Unknown, City: Unknown



//Question 4: 
  var add1 = (a, b) => { return a + b };
  var add2 = (a, b) => a + b;




//Question 5: 
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');  // Resolving the promise with a value
    }, 1000);  // Waits for 1 second before resolving
  });
  
  myPromise.then(result => {
    console.log("Question 5 " + result);  // Logs the resolved value ('Success!')
  });

  myPromise.then("Question 5 " + console.log);  // Directly logs the resolved value