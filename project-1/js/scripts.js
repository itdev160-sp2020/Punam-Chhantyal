// welcome message
var user = 'Punam';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the list of my class schedule for Spring 2020. ';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;