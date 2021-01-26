// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = ``;

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("You agreed.");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

function ask(question, well, notwell) {
  if (confirm(question)) well();
  else notwell();
}

ask(
  "how are you?",
  function() {
    alert("lets got to party !");
  },
  function() {
    alert("lets stay at home !");
  }
);
