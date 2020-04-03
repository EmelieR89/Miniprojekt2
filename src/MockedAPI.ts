export function CreateOrder(allorderinfo: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Din order gick igenom");
    }, 3000);
  });
}
