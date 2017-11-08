var name = "Kevin O'Connor"; //document.getElementsByClassName("AvatarModal__name")[0].innerHTML;

chrome.storage.sync.get({
    initials: 'KO'
  }, function(items) {
    var initials = items.initials;
    console.log("Current User: '"+initials+"'");
    hideStories(initials);
  });

function hideStories(initials) {
  var storyElements = document.querySelectorAll("[data-aid=StoryPreviewItem__preview]");
      storyElements.forEach(function(story){
        var storyOwnerElements = story.querySelectorAll(".owner");
          var ownersToDisplay = [];
          storyOwnerElements.forEach(function(owner){
            if (owner.innerHTML==initials) {
                ownersToDisplay.push(owner.title);
            }
          });
          if (ownersToDisplay.length == 0) {
            story.parentNode.style.display = 'none';
          }
          // storyOwnerElements.forEach(function(owner){
          //   if (owner.title!="Kevin O'Connor") {
          //       console.log("Story Owner not Kevin O'Connor, Hiding Story");
          //       story.parentNode.style.display = 'none'
          //   }
          // });
        });
}