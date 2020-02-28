console.log("hello world");
// Prints: "hello world" to stdout

console.log("hello %s", "world 2");
// Prints: "hello world 2" to stdout

console.error(new Error("Whoops, something bad happened"));
// Prints: [Error: Whoops, something bad happened], to stderr

const name = "Will Robinson";
console.warn(`Danger ${name}! Danger!`);
// Prints: "Danger Will Robinson! Danger!" to stderr

console.log("__dirname:", __dirname);
// Prints: C://<root-folder>/.../<parent_folder> to stdout

console.log("__filename:", __filename);
// Prints: C://<root-folder>/.../<parent_folder>/<current_file> to stdout
