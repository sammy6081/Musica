const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener('click', function() {
      const clickedBtnId = this.dataset.id;

      secBtn.forEach((btn) => {
        if (btn.dataset.id === clickedBtnId) {
          btn.classList.add('active-btn');
        } else {
          btn.classList.remove('active-btn');
        }
      });

      sections.forEach((section) => {
        if (section.dataset.id === clickedBtnId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  }
}

PageTransition();



// function translateTo(sectionID){
//   const section = document.getElementById(sectionID);
//   section.scrollIntoView({behavior: 'smooth'});
// }

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeSlider = document.getElementById('volume-slider');
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const progressSlider = document.getElementById("progress-slider");

// Play/pause audio
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
  } else {
    audioPlayer.pause();
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
  }
});

// progress-slider to move when audio plays
progressSlider.addEventListener('input', () => {
  const currentTime = audioPlayer.duration *(progressSlider.value/100);
  audioPlayer.currentTime = currentTime
});

audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressSlider.value = progress;
});

// Update volume
volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value;
});
