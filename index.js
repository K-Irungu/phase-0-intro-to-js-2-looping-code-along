
// Thank You card creator function
  const names = ["Charlie", "Samip", "Ali", "Guadalupe", "Ollie", "Aki"]; // The current array
  const thankYouNotes = []; // The new array to be filled
  const eventName = "birthday";

  function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) { 
      thankYouNotes.push((`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
  }

  return thankYouNotes;

  }

// The countdown function

function countDown(num) {
    while (num > -1) {
        console.log(num--);
}

}

countDown(10);


