// blocked words data, separated by comma
const blocklist =
  'skit, fan, jävla, jävlar, helvete, kuk, fitta, knulla, hora, as, piss, rövhål, idiot, slampa, sug, dö, döda';

const form = document.getElementById('mainForm');
const submitBtn = document.getElementById('submit');

// filtering function, return censored message
function filterForbiddenWords(message, blocklist) {
  const forbiddenWords = blocklist.split(',').map((word) => word.trim());
  forbiddenWords.forEach((word) => {
    const regex = new RegExp(
      `(^|[^a-zåäöA-ZÅÄÖ])${word}(?=[^a-zåäöA-ZÅÄÖ]|$)`,
      'gi'
    );
    message = message.replace(regex, (match, p1) => `${p1}*`);
  });

  return message;
}

// event listener for form submit button
submit.addEventListener('click', (event) => {
  event.preventDefault(); //preventing reload

  // getting entered message
  const messageField = document.getElementById('message');

  //   if no message element in form, return
  if (!messageField) {
    return;
  }

  //   if message exists, proceed
  const originalMessage = messageField.value;

  // calling the filtering function on the message
  const filteredMessage = filterForbiddenWords(originalMessage, blocklist);

  // printing out the filtered message in the console - remove once approved
  console.log(filteredMessage);
});
