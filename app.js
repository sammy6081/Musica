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
          menuList.classList.add('hidden');
        } else {
          btn.classList.remove('active-btn');
          // menuList.classList.toggle('hidden')
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

// method for dhowing and hiding menu list
const cancelBtn = document.getElementById('cancel');
const menuList = document.getElementById('menu-list');
const menuBar = document.getElementById('menu-bar');

cancelBtn.addEventListener('click', ()=>{
  menuList.classList.toggle('hidden')
})
menuBar.addEventListener('click', ()=>{
  menuList.classList.toggle('hidden');
})

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

// const express = require('express');
// const session = require('express-session');
// const fetch = require('node-fetch');
// const querystring = require('querystring');

// const app = express();

// // Step 3: Set up API credentials
// const client_id = '4eb0953726c840779e951c6c37538f26';
// const client_secret = '3654f328177e43ae8ac113d34ad4d36c';
// const redirect_uri = 'https://open.spotify.com/playlist/37i9dQZF1E4wUsULPN8hZP';

// // Step 4: Create a Spotify authentication endpoint
// app.get('/login', (req, res) => {
//   const scope = 'user-read-private user-read-email'; // Add desired scopes
//   const state = generateRandomString(16);

//   // Save the state in session to validate against CSRF attacks
//   req.session.state = state;

//   const authURL = 'https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     });

//   res.redirect(authURL);
// });

// // Step 5: Handle the Spotify callback
// app.get('/callback', async (req, res) => {
//   const code = req.query.code || null;
//   const state = req.query.state || null;

//   if (state === null || state !== req.session.state) {
//     res.status(403).send('Authentication error: state mismatch');
//     return;
//   }

//   const tokenURL = 'https://accounts.spotify.com/api/token';
//   const tokenParams = {
//     code: code,
//     redirect_uri: redirect_uri,
//     grant_type: 'authorization_code',
//     client_id: client_id,
//     client_secret: client_secret
//   };

//   try {
//     const response = await fetch(tokenURL, {
//       method: 'POST',
//       body: querystring.stringify(tokenParams),
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     });

//     const data = await response.json();

//     // Use data.access_token to make requests to the Spotify Web API

//     // Example: Get the user's profile information
//     const userProfileResponse = await fetch('https://api.spotify.com/v1/me', {
//       headers: {
//         'Authorization': `Bearer ${data.access_token}`
//       }
//     });
//     const userProfile = await userProfileResponse.json();
//     console.log('User profile:', userProfile);
    
//     // You can now make further Spotify API requests with data.access_token

//     res.send('Authentication successful!');
//   } catch (error) {
//     console.error('Error getting access token:', error);
//     res.status(500).send('Error getting access token');
//   }
// });

// // Start the server
// const port = 8888;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// // Helper function to generate a random string for state
// function generateRandomString(length) {
//   const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomString = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     randomString += charset.charAt(randomIndex);
//   }
//   return randomString;
// }


// // Configure express-session
// app.use(session({
//   secret: '3654f328177e43ae8ac113d34ad4d36c',
//   resave: false,
//   saveUninitialized: true,
// }));


// app.get('/logout', (req, res) => {
//   // Clear the session data
//   req.session.destroy(err => {
//     if (err) {
//       console.error('Error clearing session:', err);
//     } else {
//       res.redirect('/');
//     }
//   });
// });
