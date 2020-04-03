export function CreateOrder(cart: any ) {
  // TODO: when implementing a backend use the arguments to process the order..
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Din order gick igenom");
    }, 3000);
  });
}
