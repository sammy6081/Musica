(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}})();const r=[{id:1,title:"Let me love you ~ DJ-Snake...",category:"pop",duration:3.24,img:"https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Dj-Snake-Ft-Justin-Bieber-Let-Me-Love-You-via-Naijafinix.com_.mp3",bgCard:"bg-card-1"},{id:2,title:"who i am",category:"hip-hop",duration:2.32,img:"https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Anne-Marie-Who-I-Am-via-Naijafinix.com_.mp3",bgCard:"bg-card-2"},{id:3,title:"hallelujah challenge",category:"gospel",duration:14.21,img:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Nathaniel_Bassey_-_Hallelujah_Challenge_Praise_Medley_CeeNaija.com_.mp3",bgCard:"bg-card-3"},{id:4,title:"no longer slaves",category:"gospel",duration:6.13,img:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/No-Longer-Slaves-Bethel-Music.mp3",bgCard:"bg-card-3"},{id:5,title:"am i wrong",category:"pop",duration:5.12,img:"https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Nico-Vinz-Am-I-Wrong.mp3",bgCard:"bg-card-1"},{id:6,title:"iya ni wura",category:"afro-beat",duration:1.45,img:"https://images.unsplash.com/photo-1544652406-55174175da25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Simi_-_Iya_Ni_Wura.mp3",bgCard:"bg-card-4"},{id:7,title:"we found love",category:"pop",duration:3.36,img:"https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Rihanna-Ft-Calvin-Harris-We-Found-Love-via-Naijafinix.com_.mp3",bgCard:"bg-card-1"},{id:8,title:"take my breath away",category:"hip-hop",duration:2.59,img:"https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Duncan_Laurence_-_Take_My_Breath_Away.mp3",bgCard:"bg-card-2"},{id:9,title:"jesus onememma",category:"gospel",duration:4.06,img:"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Mercy_Chinwo_Ft_Chioma_Jesus_Onememma_9jaflaver.com_.mp3",bgCard:"bg-card-3"},{id:10,title:"perfect",category:"pop",duration:4.09,img:"https://images.unsplash.com/photo-1627283391728-701007067e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",song:"/Musica media/Ed-Sheeran-Ft-Beyonce-Perfect-Duet-via-Naijafinix.com_.mp3",bgCard:"bg-card-1"}],p=document.querySelectorAll(".section");document.querySelectorAll(".controls");const d=document.querySelectorAll(".control");document.querySelector(".main-content");function f(){for(let n=0;n<d.length;n++)d[n].addEventListener("click",function(){const e=this.dataset.id;d.forEach(s=>{s.dataset.id===e?(s.classList.add("active-btn"),c.classList.add("hidden")):s.classList.remove("active-btn")}),p.forEach(s=>{s.dataset.id===e?s.classList.add("active"):s.classList.remove("active")})})}f();const y=document.getElementById("cancel"),c=document.getElementById("menu-list"),x=document.getElementById("menu-bar");y.addEventListener("click",()=>{c.classList.toggle("hidden")});x.addEventListener("click",()=>{c.classList.toggle("hidden")});class b{constructor(e){this.songs=e,this.currentSongIndex=0,this.audio=new Audio,this.isRandom=!1,this.audio.addEventListener("timeupdate",()=>this.updateProgressSlider()),this.playPauseBtn=document.getElementById("play-pause-btn"),this.volumeSlider=document.getElementById("volume-slider"),this.playIcon=document.getElementById("play"),this.pauseIcon=document.getElementById("pause"),this.progressSlider=document.getElementById("progress-slider"),this.stopBtn=document.querySelector(".stop-btn"),this.prevBtnMusicPlayer=document.querySelector(".prev-btn"),this.nextBtnMusicPlayer=document.querySelector(".next-btn"),this.randomBtnMusicPlayer=document.querySelector(".random-btn"),this.playPauseBtn.addEventListener("click",()=>this.togglePlayPause()),this.volumeSlider.addEventListener("input",()=>this.updateVolume()),this.progressSlider.addEventListener("input",()=>this.updateProgress()),this.prevBtnMusicPlayer.addEventListener("click",()=>this.playPrevSong()),this.nextBtnMusicPlayer.addEventListener("click",()=>this.playNextSong()),this.randomBtnMusicPlayer.addEventListener("click",()=>this.toggleRandom()),this.stopBtn.addEventListener("click",()=>this.stopAudio()),this.updateSongInfo(),this.audio.addEventListener("ended",()=>this.playNextSong())}updateSongInfo(){const e=this.songs[this.currentSongIndex],s=document.getElementById("title"),a=document.getElementById("artist"),i=document.getElementById("album-artwork");s.textContent=e.title,a.textContent=e.category,i.src=e.img,this.audio.src=e.song}playSong(e){if(e>=0&&e<this.songs.length){this.audio.src=this.songs[e].song,this.audio.play(),this.currentSongIndex=e;const s=document.getElementById("title"),a=document.getElementById("artist"),i=document.getElementById("album-artwork");s.textContent=this.songs[e].title,a.textContent=this.songs[e].category,i.src=this.songs[e].img,this.progressSlider.value=0}}updateProgressSlider(){this.progressSlider.value=this.audio.currentTime/this.audio.duration*100}playNextSong(){if(this.isRandom){const e=Math.floor(Math.random()*this.songs.length);this.playSong(e)}else this.playSong((this.currentSongIndex+1)%this.songs.length);this.audio.played?(this.playIcon.classList.remove("hidden"),this.pauseIcon.classList.add("hidden")):(this.pauseIcon.classList.remove("hidden"),this.playIcon.classList.add("hidden"))}playPrevSong(){this.playSong((this.currentSongIndex-1+this.songs.length)%this.songs.length),this.audio.played?(this.playIcon.classList.remove("hidden"),this.pauseIcon.classList.add("hidden")):(this.pauseIcon.classList.remove("hidden"),this.playIcon.classList.add("hidden"))}toggleRandom(){this.isRandom=!this.isRandom}togglePlayPause(){this.audio.paused?(this.audio.play(),this.pauseIcon.classList.remove("hidden"),this.playIcon.classList.add("hidden")):(this.audio.pause(),this.pauseIcon.classList.add("hidden"),this.playIcon.classList.remove("hidden"))}updateVolume(){this.audio.volume=this.volumeSlider.value}updateProgress(){const e=this.audio.duration*(this.progressSlider.value/100);this.audio.currentTime=e}stopAudio(){this.audio.pause(),this.audio.currentTime=0,this.pauseIcon.classList.add("hidden"),this.playIcon.classList.remove("hidden")}}document.addEventListener("DOMContentLoaded",()=>{new b(r)});const M=document.querySelector(".section-center"),h=document.querySelector(".collection-container");window.addEventListener("DOMContentLoaded",function(){l(r),v()});function l(n){let e=n.map(function(s){return`<div class="flex justify-between items-center bg-slate-500 w-10/12  bg-opacity-20 cursor-pointer rounded-xl p-2 hover:scale-x-95 capitalize">
        <div class="flex justify-between items-center space-x-4 ">
            <img src=${s.img} alt=${s.title} class="rounded-lg h-12 w-12">
            <button type="submit" class="text-lg hidden md:block">
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="flex justify-between itmes-center w-10/12">
            <div class="flex flex-col items-start justify-evenly md:items-center md:flex-row w-8/12">
                <p>${s.title}</p>
                <p>Single</p>
            </div>
            <div class="flex flex-col-reverse justify-between mx-8 items-end md:items-center md:flex-row w-4/12">
                <p>${s.duration}</p>
                <button type="submit" class="text-lg text-yellow-500">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
    </div>`});e=e.join(""),M.innerHTML=e}function v(){const e=r[0].bgCard,a=r.reduce(function(t,o){return t.includes(o.category)||t.push(o.category),t},["all"]).map(function(t){const o=t==="all"?e:`bg-card-${t}`;return`
        <div data-id=${t} class="card-zoom filter-btn capitalize cursor-pointer">
          <div class="card-zoom-image ${o}"></div>
          <div data-id="tomorrow" class="card-zoom-content control">
                        <div class="ml-3">
                            <h1 class="text-2xl">${t}</h1>
                            <p class="text-gray-400">John Doe</p>
                            <p class="card-zoom-likes">33k Likes</p>
                        </div>
                        <button type="submit" class=" text-3xl bg-yellow-800 opacity-70 card-zoom-btn text-yellow-500 mr-3">
                            <i class="fas fa-heart"></i></button>
                    </div>
        </div>
      `}).join("");h.innerHTML=a,h.querySelectorAll(".filter-btn").forEach(function(t){t.addEventListener("click",function(o){const u=o.currentTarget.dataset.id,g=r.filter(function(m){if(m.category===u)return m});l(u==="all"?r:g)})})}