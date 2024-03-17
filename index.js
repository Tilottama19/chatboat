var data = {
  chatinit: {
    title: [
      "Hello <span class='emoji'> &#128075;</span>",
      "I am Mr.Chatbot",
      "How can I help you?",
    ],
    options: [
      "Movies  <span class='emoji'> &#128075;</span>",
      "News",
      "Shopping  <span class='emoji'> &#128075;</span>",
      "Music <span class='emoji'> &#128075;</span>",
    ],
  },
  movies: {
    title: ["Please select catogory"],
    options: ["Hollywood", "Bollywood", "Web Series", "Others"],
    url: {},
  },
  news: {
    title: ["Today's Top 5 Headlines"],
    options: [
      "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
      "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA. ",
    ],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  shopping: {
    title: [
      "Please choose shopping category <span class='emoji'> &#128090;</span>",
    ],
    options: ["Electronics", "Beauty proucts", "Dress"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  hollywoods: {
    title: [
      "These are some more hollywood movies to watch",
      "Click on to movies to know more",
    ],
    options: ["Movies 1", "Movies 2", "Movies 3", "Movies 4"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  bollywood: {
    title: ["These are latest bollywood movies to watch"],
    options: ["Movies 1", "Movies 2", "Movies 3", "Movies 4"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  web: {
    title: ["These are some latest web series movies to watch"],
    options: ["Web series 1", "Web series 2", "Web series 3", "Web series 4"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  others: {
    title: ["Here are some option for you"],
    options: ["YouTube", "Netflix", "Amazon Prime", "Hot Star"],
    url: {
      more: "https://www.youtube.com",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  }
};

document.getElementById("init").addEventListener("click", showChatBoat);
var cbot = document.getElementById("chat-box");
var len1 = data.chatinit.title.length;

function showChatBoat() {
  console.log(this.innerText);
  if (this.innerText == "START CHAT") {
    document.getElementById("test").style.display="block";
    document.getElementById("init").innerText="CLOSE CHAT";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML ='';
  for (var i=0; i<len1; i++) {
    setTimeout(handleChat, (i*500));
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  },(len1+1)*500);
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class","msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i<options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<div>'+options[i]+'</div>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];
  document.querySelectorAll(".opt").forEach((e1) => {
    e1.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">'+findText+'</span>';
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleResults(title, options, url) {
  for (let i=0; i<title.length; i++) {
    var elm = document.createElement("p");
    elm.innerHTML = title[i];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
  }
  const isObjectEmpty = (url) =>{
    return JSON.stringify(url)==="{}";
  };
  if (isObjectEmpty(url)==true){
    console.log("having more options");
    showOptions(options,url);

  } else {
    console.log("end result");
    handleOptions(options,url);
  }
}
function handleOptions(options,url){
  for (var i = 0; i<options.length; i++) {
    var opt = document.createElement("span");
    var inp ='<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
  var inp = '<a class="m-link" href="'+url.more+'">' + "See more</a>";
  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };
  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML = inp;
  opt.setAttribute("class", "opt link");
  cbot.appendChild(opt);
  handleScroll();
}
function handleScroll() {
  var elm = document.getElementById("chat-box");
  elm.scrollTop = elm.scrollHeight;
}
