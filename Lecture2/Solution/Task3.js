const isRaining = true;
const isWarm = false;

if (isRaining && !isWarm) {
  console.log("Bring an umbrella and wear a jacket.");
} else if (isRaining && isWarm) {
  console.log("Bring an umbrella but no jacket needed.");
} else if (!isRaining && isWarm) {
  console.log("No umbrella needed, but wear light clothes.");
} else {
  console.log("No umbrella and no jacket needed.");
}