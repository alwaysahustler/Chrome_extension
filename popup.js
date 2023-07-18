// Retrieve the textarea element from the HTML
const noteTextArea = document.getElementById('note');

// Add event listeners for text highlighting and font selection
noteTextArea.addEventListener('mouseup', highlightText);
noteTextArea.addEventListener('change', selectFont);

// Add event listener for saving the note when the textarea loses focus
noteTextArea.addEventListener('blur', saveNote);

// Add event listener for loading the saved note when the extension is opened
window.addEventListener('load', loadNote);

// Add event listener for adding the current date and time
const dateButton = document.getElementById('add-date');
dateButton.addEventListener('click', addDate);

// Add event listener for adding an image
const imageButton = document.getElementById('add-image');
imageButton.addEventListener('click', addImage);

// Function to highlight selected text
function highlightText() {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    document.execCommand('hiliteColor', false, 'yellow');
  }
}

// Function to select font
function selectFont() {
  const selectedFont = noteTextArea.value;
  noteTextArea.style.fontFamily = selectedFont;
}

// Function to save the note
function saveNote() {
  const note = noteTextArea.value;
  chrome.storage.local.set({ 'note': note });
}

// Function to load the saved note
function loadNote() {
  chrome.storage.local.get('note', function (result) {
    noteTextArea.value = result.note || '';
  });
}

// Function to add the current date and time
function addDate() {
  const currentDate = new Date().toLocaleString();
  noteTextArea.value += '\n' + currentDate + '\n';
}

// Function to add an image
function addImage() {
  // Code to add image goes here
}
