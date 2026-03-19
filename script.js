const song = new Audio();
const ctrlIcon = document.getElementById("ctrlIcon");
const progress = document.getElementById("progress");
const songListContainer = document.getElementById("song-list");
const searchInput = document.getElementById("search-input");

let songs = [
  {
    title: "Winning Speech",
    artist: "Karan Aujla",
    src: "Gabhru (New Version) - Karan Aujla.mp3",
    img: "karan.jpg"
  },
  {
    title: "Softly",
    artist: "Karan Aujla",
    src: "Softly Making Memories 128 Kbps.mp3",
    img: "karann.jpg"
  },
  {
    title: " Ghode 3",
    artist: "Masoom Sharma, Girik Aman",
    src: "Ghode_3_1.mp3",
    img: "Ghode-3-Haryanvi-2025-20250602112532-500x500.jpg"
  },
  {
    title: "Badmashi",
    artist: " Deep Jandu",
    src: "Badmashi_1.mp3",
    img: "Badmashi-1.jpg"
  },
  {
    title: " Putt-Jattan-De",
    artist: "Diljit Dosanjh",
    src: "Putt_Jattan_De_1.mp3",
    img: "Putt-Jattan-De-1.jpg"
  },
  {
    title: "chorni",
    artist: " Sidhu Moose Wala and DIVINE",
    src: "Chorni_1.mp3",
    img: "Chorni-1.jpg"
  },
  {
    title: " Aankhein Khuli",
    artist: "  Lata Mangeshkar, Udit Narayan, Shweta Pandit, Sonali Bhatawdekar, Preetha Mazumdar, Jatin, Manohar S",
    src: "Aankhein Khuli Mohabbatein 128 Kbps.mp3",
    img: "Aankhein-Khuli-Mohabbatein-500-500.jpg"
  },
  {
    title: " Zinda Rehti Hain Mohabbatein",
    artist: "Lata Mangeshkar, Udit Narayan",
    src: "Zinda Rehti Hain Mohabbatein Lata Mangeshkar 128 Kbps.mp3",
    img: "Zinda-Rehti-Hain-Mohabbatein-Lata-Mangeshkar-500-500.jpg"
  },
  {
    title: " Libaas",
    artist: "  kaka",
    src: "Libaas_1.mp3",
    img: "Libaas-1.jpg"
  },
  {
    title: " Dubb",
    artist: "Mankrit",
    src: "Dubb_45_1.mp3",
    img: "Dubb-45-1.jpg"
  },
  {
    title: " RadhaKrishna",
    artist: "Atul Shankar (Krishna Flute album)",
    src: "radhak.mp3",
    img: "radhakrishna.jpg"
  },


  {
    title: "Case",
    artist: "Diljit Dosanjh",
    src: "Case.mp3",
    img: "kar.jpg"
  }
];


let songIndex = 0;

function loadSong(index) {
  song.src = songs[index].src;
  document.getElementById("song-title").innerText = songs[index].title;
  document.getElementById("artist-name").innerText = songs[index].artist;
  document.getElementById("track-img").src = songs[index].img;
}

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.replace("fa-pause", "fa-play");
  }
}

function playThisSong(index) {
  songIndex = index;
  loadSong(songIndex);
  song.play();
  ctrlIcon.classList.replace("fa-play", "fa-pause");
}

function displaySongs(list) {
  songListContainer.innerHTML = "";
  list.forEach((s, i) => {
    songListContainer.innerHTML += `
            <div class="song-item" onclick="playThisSong(${songs.indexOf(s)})">
                <img src="${s.img}">
                <div><h3>${s.title}</h3><p>${s.artist}</p></div>
            </div>`;
  });
}

searchInput.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = songs.filter((s) => s.title.toLowerCase().includes(val));
  displaySongs(filtered);
});

song.ontimeupdate = () => {
  progress.value = (song.currentTime / song.duration) * 100;
};
progress.oninput = () => {
  song.currentTime = (progress.value * song.duration) / 100;
};

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  playThisSong(songIndex);
}
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playThisSong(songIndex);
}

displaySongs(songs);
loadSong(songIndex);
