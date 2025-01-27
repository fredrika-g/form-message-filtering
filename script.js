// blocked words data, separated by comma
const blocklist =
  'skit, fan, jävla, helvete, kuk, fitta, knulla, hora, as, piss, rövhål, idiot, slampa, sug, dö';

const form = document.getElementById('mainForm');
const submitBtn = document.getElementById('submit');

// filtering function, return censored message
function filterForbiddenWords(message, blocklist) {
  const forbiddenWords = blocklist.split(',').map((word) => word.trim());
  forbiddenWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}(\\w+)?\\b`, 'gi');
    message = message.replace(regex, '*');
  });

  return message;
}

// event listener for form submit button
submit.addEventListener('click', (event) => {
  event.preventDefault(); //preventing reload

  // getting entered message
  const messageField = document.getElementById('message');
  const originalMessage = messageField.value;

  // calling the filtering function on the message
  const filteredMessage = filterForbiddenWords(originalMessage, blocklist);

  // printing out the filtered message in the console
  console.log(filteredMessage);
});
