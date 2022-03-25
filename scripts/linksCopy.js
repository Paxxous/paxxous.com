function copy() {
  let copyText = document.getElementById("discordId");

  if (copyText) {
    // Set to the clipboard and let the user know
    navigator.clipboard.writeText(copyText.innerHTML);
    copyText.innerHTML = "Copied!";

    // Wait
    setTimeout(() => { /* Set back */ copyText.innerHTML = "Paxxous#3146"; /* Set back */ }, 2000);
  }
}