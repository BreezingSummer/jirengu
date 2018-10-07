var APP_ID = 'pIpXBnRkCccTIyoPaBwUW86W-gzGzoHsz';
var APP_KEY = '7jtOInmrdtVrs9kC6Cjbd36A';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

document.querySelector("#commit").addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("hahaha");
    var commitContent = document.querySelector("#commit > input[type=text]").value;
    // console.log(commitContent);
    var commitObject = AV.Object.extend('message');
    var commit = new commitObject();
    commit.save({
        words: commitContent
    }).then(function(object){
        console.log(object);
        var li = document.createElement("li");
        li.innerText = object.attributes.words;
        document.querySelector("#allCommits").appendChild(li);
        document.querySelector("#commit > input[type=text]").value = null;
    })
})

var allCommitObject = new AV.Query('message');
allCommitObject.find().then(function (allCommit) {
    // console.log(allCommit);
    // console.log(allCommit[0].attributes.words)
    var allCommitArray = allCommit.map((item) => item.attributes.words)
    // console.log(allCommitArray);
    allCommitArray.forEach(element => {
        var li = document.createElement("li");
        li.innerText = element;
        document.querySelector("#allCommits").appendChild(li);
    });
})

