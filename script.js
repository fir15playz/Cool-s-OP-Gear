document.addEventListener("DOMContentLoaded", function() {
    // Update text content for each level
    updateLevelText("levelExtreme", "/images/level_extreme");
    updateLevelText("levelCool", "/images/level_cool");
    updateLevelText("levelExpert", "/images/level_expert");
    updateLevelText("levelSkilled", "/images/level_skilled");
    updateLevelText("levelNovice", "/images/level_novice");
    updateLevelText("levelBeginner", "/images/level_beginner");
    updateLevelText("levelGood", "/images/level_good");
    updateLevelText("levelNormal", "/images/level_normal");
    updateLevelText("levelEpic", "/images/level_epic");
    updateLevelText("levelLegendary", "/images/level_legendary");
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
