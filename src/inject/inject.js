chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(handleMutationEvents);
      });

      // configuration of the observer:
      var config = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      };

      observer.observe(document, config);

      var handleMutationEvents = function handleMutationEvents(mutation) {
        var storyElements = document.querySelectorAll(".preview");
        storyElements.forEach(function(story){
          var storyOwnerElements = story.querySelectorAll(".owner");
            var ownersToDisplay = [];
            storyOwnerElements.forEach(function(owner){
              if (owner.title=="Kevin O'Connor") {
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
      }

  }, 10);
});
