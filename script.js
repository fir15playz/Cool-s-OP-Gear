document.addEventListener("DOMContentLoaded", function() {
    // Update text content for each level
    updateLevelText("levelExtreme", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/extreme.webp?v=1708800871111");
    updateLevelText("levelCool", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/cool.webp?v=1708802128437");
    updateLevelText("levelExpert", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/exp.webp?v=1708802240663");
    updateLevelText("levelSkilled", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/skilled.webp?v=1708800876057");
    updateLevelText("levelNovice", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/novice.webp?v=1708800875243");
    updateLevelText("levelBeginner", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/beginner.webp?v=1708801950750");
    updateLevelText("levelGood", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/good.webp?v=1708802232849");
    updateLevelText("levelNormal", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/normal.webp?v=1708801997148");
    updateLevelText("levelEpic", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/epic.webp?v=1708800879996");
    updateLevelText("levelLegendary", "https://cdn.glitch.global/e599f8fd-9c51-4a18-aae8-bebd72a3f7d4/legendary.webp?v=1708800872686");
});

// Function to update text content based on ID
function updateLevelText(levelId, newText) {
    var levelElements = document.getElementsByClassName(levelId);
    if (levelElements.length > 0) {
        for (var i = 0; i < levelElements.length; i++) {
            levelElements[i].src = newText;
        }
    }
}


function selectAllText(textarea) {
    textarea.select();
    document.execCommand("copy"); // Copy the selected text to clipboard
}


function searchCommands() {
  var input, filter, commands, commandContainer, title, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  commands = document.getElementsByClassName('command');

  for (i = 0; i < commands.length; i++) {
    commandContainer = commands[i];
    title = commandContainer.getElementsByTagName('h3')[0];
    txtValue = (title.textContent || title.innerText).replace('Title: ', '').trim(); // Remove 'Title:' and trim whitespace

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      commandContainer.style.display = '';
    } else {
      commandContainer.style.display = 'none';
    }
  }
}