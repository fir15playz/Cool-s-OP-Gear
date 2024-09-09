document.addEventListener("DOMContentLoaded", function() {
    // Update text content for each level
    updateLevelText("levelExtreme", "images/level_extreme.png");
    updateLevelText("levelCool", "images/level_cool.png");
    updateLevelText("levelExpert", "images/level_expert.png");
    updateLevelText("levelSkilled", "images/level_skilled.png");
    updateLevelText("levelNovice", "images/level_novice.png");
    updateLevelText("levelBeginner", "images/level_beginner.png");
    updateLevelText("levelGood", "images/level_good.png");
    updateLevelText("levelNormal", "images/level_normal.png");
    updateLevelText("levelEpic", "images/level_epic.png");
    updateLevelText("levelLegendary", "images/level_legend.png");
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
