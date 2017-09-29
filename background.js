// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var isHiding = false;

function updateIcon() {
	if (isHiding) {
		console.log('showing stories');
		chrome.tabs.executeScript(null, {file: "showStories.js"});
		chrome.browserAction.setIcon({path:"iconShowing.png"});
		isHiding = false;
	}
	else {
		console.log('hiding stories');
		chrome.tabs.executeScript(null, {file: "hideStories.js"});
		chrome.browserAction.setIcon({path:"iconHiding.png"});
		isHiding = true;
	}

}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
