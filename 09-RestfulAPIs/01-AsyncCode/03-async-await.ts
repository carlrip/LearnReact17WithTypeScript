const someWork = async () => {
  // need mark asynchronous function with async keyword
  try {
    const result = await wait(1500); // need to use await keyword to call asynchronous function
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
};

someWork();

// => even more readable - like synchronous code
// => use use promises and async await together because async and await is syntactic sugar on top of promises
