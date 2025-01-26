// Example Random Event Generator
const events = [
    "A wild creature appears in the tavern!",
    "A mysterious stranger offers you a quest.",
    "A sudden storm disrupts the town.",
    "The local tavern keeper challenges you to a drinking contest."
];

document.getElementById('add-event').addEventListener('click', () => {
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById('story-text').innerText = randomEvent;
});

// Handle character creation
document.getElementById('character-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const characterName = document.getElementById('name').value;
    alert(`Character ${characterName} created!`);
});
