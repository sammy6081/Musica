const menu = [
    {
      id: 1,
      title: "Let me love you ~ DJ-Snake...",
      category: "pop",
      duration: 3.24,
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Dj-Snake-Ft-Justin-Bieber-Let-Me-Love-You-via-Naijafinix.com_.mp3`,
      bgCard:'bg-card-1',
    },
    {
      id: 2,
      title: "who i am",
      category: "hip-hop",
      duration: 2.32,
      img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Anne-Marie-Who-I-Am-via-Naijafinix.com_.mp3`,
      bgCard:'bg-card-2',
    },
    {
      id: 3,
      title: "hallelujah challenge",
      category: "gospel",
      duration: 14.21,
      img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: "/Musica media/Nathaniel_Bassey_-_Hallelujah_Challenge_Praise_Medley_CeeNaija.com_.mp3",
      bgCard:'bg-card-3',
    },
    {
      id: 4,
      title: "no longer slaves",
      category: "gospel",
      duration: 6.13,
      img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/No-Longer-Slaves-Bethel-Music.mp3`,
      bgCard:'bg-card-3',
    },
    {
      id: 5,
      title: "am i wrong",
      category: "pop",
      duration: 5.12,
      img: "https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Nico-Vinz-Am-I-Wrong.mp3`,
      bgCard:'bg-card-1'
    },
    {
      id: 6,
      title: "iya ni wura",
      category: "afro-beat",
      duration: 1.45,
      img: "https://images.unsplash.com/photo-1544652406-55174175da25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Simi_-_Iya_Ni_Wura.mp3`,
      bgCard:'bg-card-4',
    },
    {
      id: 7,
      title: "we found love",
      category: "pop",
      duration: 3.36,
      img: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Rihanna-Ft-Calvin-Harris-We-Found-Love-via-Naijafinix.com_.mp3`,
      bgCard:'bg-card-1'
    },
    {
      id: 8,
      title: "take my breath away",
      category: "hip-hop",
      duration: 2.59,
      img: "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Duncan_Laurence_-_Take_My_Breath_Away.mp3`,
      bgCard:'bg-card-2',
    },
    {
      id: 9,
      title: "jesus onememma",
      category: "gospel",
      duration: 4.06,
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Mercy_Chinwo_Ft_Chioma_Jesus_Onememma_9jaflaver.com_.mp3`,
      bgCard:'bg-card-3',
    },
    {
      id: 10,
      title: "perfect",
      category: "pop",
      duration: 4.09,
      img: "https://images.unsplash.com/photo-1627283391728-701007067e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      song: `/Musica media/Ed-Sheeran-Ft-Beyonce-Perfect-Duet-via-Naijafinix.com_.mp3`,
      bgCard:'bg-card-1'
    },
  ];

//   const sectionCenter = document.querySelector('.section-center');
//   const container = document.querySelector('.collection-container')
  
//   //   load items
//   window.addEventListener('DOMContentLoaded', function(){
//     displayMenuItems(menu);
//    displayMenuButtons();
//   });
  
  
  
//   // create a function that auto-update the components
//   function displayMenuItems(menuItems){
//     let displayMenu = menuItems.map(function(item){
//         // console.log(item)
  
//         return `<div class="flex justify-between items-center bg-slate-500 w-10/12  bg-opacity-20 cursor-pointer rounded-xl p-2 hover:scale-x-95 capitalize">
//         <div class="flex justify-between items-center space-x-4 ">
//             <img src=${item.img} alt=${item.title} class="rounded-lg h-12 w-12">
//             <button type="submit" class="text-lg hidden md:block">
//                 <i class="far fa-heart"></i>
//             </button>
//         </div>
//         <div class="flex justify-between itmes-center w-10/12">
//             <div class="flex flex-col items-start justify-evenly md:items-center md:flex-row w-8/12">
//                 <p>${item.title}</p>
//                 <p>Single</p>
//             </div>
//             <div class="flex flex-col-reverse justify-between mx-8 items-end md:items-center md:flex-row w-4/12">
//                 <p>${item.duration}</p>
//                 <button type="submit" class="text-lg text-yellow-500">
//                     <i class="fas fa-ellipsis-v"></i>
//                 </button>
//             </div>
//         </div>
//     </div>`;
//     });
//     displayMenu = displayMenu.join("")
//     sectionCenter.innerHTML = displayMenu;
//   }
  
//   function displayMenuButtons(){
//     const firstCategory = menu[0]; // Assuming the first category is at index 0
//     const bgCardClassForAll = firstCategory.bgCard;
  
//     const categories = menu.reduce(function(values,item){
//       if(!values.includes(item.category)){
//         values.push(item.category);
//       }
//       return values
//     },['all']);
  
//     const categoryBtns = categories.map(function(category){
//         const bgCardClass = category === 'all' ? bgCardClassForAll : `bg-card-${category}`;
  
//       return `
//         <div data-id=${category} class="card-zoom filter-btn capitalize cursor-pointer">
//           <div class="card-zoom-image ${bgCardClass}"></div>
//           <div class="card-zoom-content">
//                         <div class="ml-3">
//                             <h1 class="text-2xl">${category}</h1>
//                             <p class="text-gray-400">John Doe</p>
//                             <p class="card-zoom-likes">33k Likes</p>
//                         </div>
//                         <button type="submit" class=" text-3xl bg-yellow-800 opacity-70 card-zoom-btn text-yellow-500 mr-3">
//                             <i class="fas fa-heart"></i></button>
//                     </div>
//         </div>
//       `
//     }).join('');
  
//     container.innerHTML = categoryBtns;
//     const filterBtns = container.querySelectorAll('.filter-btn');
  
//     filterBtns.forEach(function(btn){
//       btn.addEventListener('click',function(e){
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menu.filter(function(menuItem){
//           if(menuItem.category === category){
//             return menuItem
//           }
//         });
  
//         if(category === 'all'){
//           displayMenuItems(menu)
//         } else {
//           displayMenuItems(menuCategory)
//         }
//       });
//     });
//   }
  