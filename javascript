const target = {
  message1: "hello",
  message2: "everyone"
};

const handler = {
  get(target, prop, receiver) {
    return "world";
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // Output: world
console.log(proxy.message2); // Output: world
