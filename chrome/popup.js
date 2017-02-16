console.log("HERE")


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);


/*
"https://color.adobe.com/explore/most-popular/?time=all"
1
:
"https://web.whatsapp.com/"
2
:
"https://github.com/Husseinfarah93/emotes/commits/master"
3
:
"http://forum.bodybuilding.com/showthread.php?t=124963001"
4
:
"http://knowyourmeme.com/categories/subculture"
5
:
"http://knowyourmeme.com/memes/angry-school-boy"
6
:
"http://knowyourmeme.com/memes/neckbeard"
7
:
"http://knowyourmeme.com/memes/people/nicki-minaj"
8
:
"http://knowyourmeme.com/memes/arthur-s-fist"
9
:
"http://knowyourmeme.com/memes/confused-mr-krabs-when-you-wake-up-from-a-nap"
10
:
"http://knowyourmeme.com/memes/hugh-mungus"
11
:
"http://knowyourmeme.com/memes/bertstrips"
12
:
"http://knowyourmeme.com/memes/i-cri-evrytiem"
13
:
"http://knowyourmeme.com/memes/i-m-ethan-bradberry"
14
:
"http://knowyourmeme.com/memes/crack-kid"
15
:
"http://knowyourmeme.com/memes/minor-mistake-marvin"
16
:
"http://knowyourmeme.com/memes/i-have-drawn-you"
17
:
"http://knowyourmeme.com/memes/i-m-in-me-mum-s-car-broom-broom"
18
:
"http://knowyourmeme.com/memes/spanish-laughing-guy-el-risitas-interview-parodies"
19
:
"http://knowyourmeme.com/memes/donald-trump"
20
:
"http://knowyourmeme.com/memes/terry-crews-old-spice"
21
:
"http://knowyourmeme.com/memes/pakalu-papito"
22
:
"http://knowyourmeme.com/memes/bruh"
23
:
"http://knowyourmeme.com/memes/laughing-tom-cruise"
24
:
"http://knowyourmeme.com/memes/side-eyeing-chloe"
25
:
"http://knowyourmeme.com/memes/people/kim-jong-un"
26
:
"http://knowyourmeme.com/memes/hits-blunt"
27
:
"http://knowyourmeme.com/memes/hide-the-pain-harold"
28
:
"http://knowyourmeme.com/memes/people/ainsley-harriott"
*/