/*
  Allows for an interactive title when you first boot up the site.
  What you write gets saved to localstorage, so when the user reloads their text will still be saved
*/


var editableTitle = document.getElementById("editMe");

function edit() {
  editableTitle.contentEditable = true;
  editableTitle.spellcheck = false;
}

if (localStorage.getItem("mainTitleEdit")) {
  
  // It exists
  editableTitle.innerText = localStorage.getItem("mainTitleEdit");
  edit();

}

// Two event listeners because keypress doesn't register the last key, but you can use preventDefault() on it. Whereas keyup does save the last key
editableTitle.addEventListener("keypress", (e) => {
  // console.log(editableTitle.innerText.length);

  // Max size
  if (editableTitle.innerText.length >= 15 && e.key != "Backspace" && e.key != "ArrowRight" && e.key != "ArrowLeft") {
    console.log("big");
    e.preventDefault();
    return false;
  }
});

editableTitle.addEventListener("keyup", (e) => {
  // Save to localstorage for the message to appear next time the user loads the site
  localStorage.setItem("mainTitleEdit", editableTitle.innerText);
});