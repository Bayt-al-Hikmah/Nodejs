let user = {
    username: "skywalker",
    hobbies: ["coding", "gaming", "reading"]
  };
  
user.hobbies.push("traveling");
let upperHobbies = [];
for (let i = 0; i < user.hobbies.length; i++) {
    upperHobbies.push(user.hobbies[i].toUpperCase());
}
  
const summary = `${user.username.toUpperCase()} enjoys ${upperHobbies.join(", ")}.`;
console.log(summary); 