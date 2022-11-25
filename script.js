console.log("Hello world!");

const startJourneyButton = document.querySelector('#StartJourneyButton');
startJourneyButton.onclick = () => startJourney();

function startJourney() {
  const ride = new Audio('res/ride.wav');
  ride.play();
  startJourneyButton.setAttribute('class', 'StartJourneyButtonPlaying');
  setTimeout(function() { resetButton(); }, 2500);
}

function resetButton() {
  startJourneyButton.setAttribute('class', 'StartJourneyButton');
  alert("Die App ist leider noch nicht fertig.");
}