// function statement
function bark() {
  console.log("Woof woof");
}

bark();

// function expression
var meow = function() {
  console.log("Meow meow");
};

meow();

// function as argument (@noise is optional argument with default value `meow`)
let create_noise = (noise = meow) => {
  console.log("\ncreating noise...");
  noise();
};

create_noise();
create_noise(bark);
