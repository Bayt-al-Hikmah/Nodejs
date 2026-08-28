// Conditional Statements

// Single Condition with `if`

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

// Alternative Path with `else`

let is_raining = false;

if (is_raining){
    console.log("Bring an umbrella.");
}else{
    console.log("No umbrella needed today.");
}

// Multiple Conditions with `elseif`

let score = 85;
if (score >= 90) {
    console.log("Excellent performance");
}else if (score >= 80){
    console.log("Good job");
}else{
    console.log("Room for improvement");
}

// Tenary Operator
let is_sunny = true;
let weather_message  = (is_sunny) ? "It's a beautiful day!" : "Bring a coat.";
console.log(weather_message );


// Switch case

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Weekday 1");
        break;
    case "Tuesday":
        console.log("Weekday 2");
        break;
    case "Saturday":
    case "Sunday": // Multiple cases can fall through to the same code
        console.log("Weekend!");
        break;
    default:
        console.log("Unknown day");
        break;
}