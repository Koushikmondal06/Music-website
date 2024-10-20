let music = new Audio("audio/song-1.mp3");
//music.play();
let songs = [
  {
    id: "1",
    songName: `Pink Blue <br>
     <div class="singer">Tsumyoki,Bharg</div>`,
    poster: "musicimg/img-1.jpg",
  },
  {
    id: "2",
    songName: `7 Years <br>
        <div class="singer">Lukas Graham</div>`,
    poster: "musicimg/img-2.jpg",
  },
  {
    id: "3",
    songName: `Sadqay <br>
     <div class="singer">Aashir,Nayel</div>`,
    poster: "musicimg/img-3.jpg",
  },
  {
    id: "4",
    songName: `co2 <br>
    <div class="singer">Prateek Kuhad</div>`,
    poster: "musicimg/img-4.jpg",
  },
  {
    id: "5",
    songName: `Amake Aamar Moto Thakte Dao <br>
     <div class="singer">Anupam Ray</div>`,
    poster: "musicimg/img-5.jpg",
  },
  {
    id: "6",
    songName: `Sajna-Lofi <br>
      <div class="singer">Arijit Singh</div>`,
    poster: "musicimg/img-6.jpg",
  },
  {
    id: "7",
    songName: `Ei Meghla Dine Ekla <br>
       <div class="singer">Hemanta Mukherjee</div>`,
    poster: "musicimg/img-7.jpg",
  },
  {
    id: "8",
    songName: `Mood <br>
       <div class="singer">Hemanta Mukherjee</div>`,
    poster: "musicimg/img-8.jpg",
  },

  {
    id: "9",
    songName: `Sunroof <br>
     <div class="singer">Nicky Youre,dior</div>`,
    poster: "musicimg/img-9.jpg",
  },
  {
    id: "10",
    songName: `On My Way <br>
     <div class="singer">Alan Walker</div>`,
    poster: "musicimg/img-10.jpg",
  },
  {
    id: "11",
    songName: `Faded <br>
     <div class="singer">Alan Walker</div>`,
    poster: "musicimg/img-11.jpg",
  },
  {
    id: "12",
    songName: `Hymn for the <br>
     <div class="singer">Coldplay</div>`,
    poster: "musicimg/img-12.jpg",
  },
  {
    id: "13",
    songName: `Perfect <br>
     <div class="singer">Ed Sheeran</div>`,
    poster: "musicimg/img-13.jpg",
  },
  {
    id: "14",
    songName: `Tu hai Kahan <br>
     <div class="singer">AUR</div>`,
    poster: "musicimg/img-14.jpg",
  },
  {
    id: "15",
    songName: `Tera Ghata <br>
     <div class="singer">Gajendra Verma</div>`,
    poster: "musicimg/img-15.jpg",
  },
  {
    id: "16",
    songName: `La Da Dee <br>
     <div class="singer">Cody Simpson</div>`,
    poster: "musicimg/img-16.jpg",
  },
  {
    id: "17",
    songName: `See You Again <br>
     <div class="singer">Wiz Khalifa,charlie Puth</div>`,
    poster: "musicimg/img-17.jpg",
  },
  {
    id: "18",
    songName: `Akhiyaan <br>
     <div class="singer">Mitraz</div>`,
    poster: "musicimg/img-18.jpg",
  },
  {
    id: "19",
    songName: `Cup of Coffee <br>
     <div class="singer">IWL</div>`,
    poster: "musicimg/img-19.jpg",
  },
  {
    id: "20",
    songName: `Gulabi Aankhen <br>
     <div class="singer">Sanam</div>`,
    poster: "musicimg/img-20.jpg",
  },
  {
    id: "21",
    songName: `Gul <br>
     <div class="singer">Anuv Jain</div>`,
    poster: "musicimg/img-21.jpg",
  },
];

let song_left = document.getElementById("song-left");
let song_right = document.getElementById("song-right");
let song = document.getElementsByClassName("song")[0];
song_left.addEventListener("click", () => {
  song.scrollLeft -= 400;
});

song_right.addEventListener("click", () => {
  song.scrollLeft += 400;
});
let singers_left = document.getElementById("singers-left");
let singers_right = document.getElementById("singers-right");
let singers = document.getElementsByClassName("singers")[0];
singers_right.addEventListener("click", () => {
  singers.scrollLeft += 400;
});
singers_left.addEventListener("click", () => {
  singers.scrollLeft -= 400;
});
Array.from(document.getElementsByClassName("song-item")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
let player = document.getElementById("player");

player.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    document.getElementById("player").src = "allsvg/pause.svg";
  } else {
    music.pause();
    document.getElementById("player").src = "allsvg/play.svg";
  }
});
let makeallplay = () => {
  Array.from(document.getElementsByClassName("playlist")).forEach((ell) => {
    ell.src = " allsvg/playlist.svg";
  });
};
let mackallbackground = () => {
  Array.from(document.getElementsByClassName("song-item")).forEach((ell) => {
    ell.style.background = " rgb(105, 105, 105, 0)";
  });
};
let index = 0;
let title = document.getElementById("title");
let posterplayer = document.getElementById("posterplayer");
Array.from(document.getElementsByClassName("playlist ")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/song-${index}.mp3`;
    posterplayer.src = `musicimg/img-${index}.jpg`;
    document.getElementById("player").src = "allsvg/pause.svg";
    music.play();
    let songtitles = songs.filter((ell) => {
      return ell.id == index;
    });
    songtitles.forEach((els) => {
      let { songName } = els;
      title.innerHTML = songName;
    });
    mackallbackground();
    Array.from(document.getElementsByClassName("song-item"))[
      index - 1
    ].style.background = " rgb(105, 105, 105, 0.4)";
  });
  //makeallplay();
  //Array.from(document.getElementsByClassName("playlist"))[index-1].src = "allsvg/playlist2.svg";
});
let currentstart = document.getElementById("currentstart");
let currentend = document.getElementById("currentend");
let seek = document.getElementById("seek");
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentend.innerText = `${min1} : ${sec1}`;
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentstart.innerText = `${min2} : ${sec2}`;
  let progressbar = (music_curr / music_dur) * 100;
  seek.value = progressbar;
  let seekbar = seek.value;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100.0;
});
let volicon = document.getElementsByClassName("volicon");
let vol = document.getElementById("vol");

vol.addEventListener("change", () => {
  let vol_a = vol.value;
  music.volume = vol_a / 100;
});
let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", () => {
  index -= 1;
  console.log(index);
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("song-item")).length;
  }
  music.src = `audio/song-${index}.mp3`;
  posterplayer.src = `musicimg/img-${index}.jpg`;
  document.getElementById("player").src = "allsvg/pause.svg";
  music.play();
  let songtitles = songs.filter((ell) => {
    return ell.id == index;
  });
  songtitles.forEach((els) => {
    let { songName } = els;
    title.innerHTML = songName;
  });
  mackallbackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = " rgb(105, 105, 105, 0.4)";
});

next.addEventListener("click", () => {
 
  index ++
  if (index > Array.from(document.getElementsByClassName("song-item")).length ) {
    index = 1;
  }

  music.src = `audio/song-${index}.mp3`;
  posterplayer.src = `musicimg/img-${index}.jpg`;
  document.getElementById("player").src = "allsvg/pause.svg";
  music.play();
  let songtitles = songs.filter((ell) => {
    return ell.id == index;
  });
  songtitles.forEach((els) => {
    let { songName } = els;
    title.innerHTML = songName;
  });
  mackallbackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = " rgb(105, 105, 105, 0.4)";
});
document.querySelector(".hamb").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-120%";
})
document.getElementById('playbutten').addEventListener("click", () => {
  music.src ="audio/song-10.mp3";
  posterplayer.src = "musicimg/img-10.jpg";
  document.getElementById("player").src = "allsvg/pause.svg";
  music.play();
})
