// Descriptions for my epic software B)
var subtitleTopics = ["Efficiency", "Entertainment", "Hacking", "Organization", "Reliability", "Convenience", "Amusement", "Pleasure", "Productivity"]


var change = document.getElementById("topics");

change.innerText = subtitleTopics[Math.floor(Math.random() * subtitleTopics.length)];


// Cycle and change the topics/definitions on the subtitle
setInterval(() => {
  
  let double = true;

  while (double) {
    topic = subtitleTopics[Math.floor(Math.random() * subtitleTopics.length)];

    if (topic == change.innerText) {
    } else {
      change.innerText = topic
      double = false;
    }
  }
  
}, 2000);