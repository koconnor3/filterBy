var storyElements = document.querySelectorAll(".preview");
	console.log('found '+storyElements.length+'stories');
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