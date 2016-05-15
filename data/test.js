var tweetNodes = document.getElementsByClassName("ProfileTweet-actionList");

for (var i = 0; i< tweetNodes.length; i++) {
    var elem = document.createElement("div");
    elem.className += "test";
    tweetNodes[i].appendChild(elem);
}