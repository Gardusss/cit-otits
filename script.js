let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".members-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 1750,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


document.addEventListener('DOMContentLoaded', () => {
  const previewContainer = document.querySelector('.members-preview');
  const previewBox = document.querySelectorAll('.members-preview .preview');

  
  previewContainer.style.display = 'none'; 

  document.querySelectorAll('.swiper-slide.box .members').forEach(members => {
      members.onclick = () => {
          previewContainer.style.display = 'flex'; 
          let name = members.getAttribute('data-name'); 

          previewBox.forEach(preview => {
              let target = preview.getAttribute('data-target'); 
              if (name === target) {
                  preview.classList.add('active');
              } else {
                  preview.classList.remove('active'); 
              }
          });
      };
  });

  previewBox.forEach(close => {
      close.querySelector('.fa-times').onclick = () => {
          close.classList.remove('active'); 
          previewContainer.style.display = 'none'; 
      };
  });

  previewContainer.onclick = (event) => {
      if (event.target === previewContainer) {
          previewContainer.style.display = 'none'; 
          previewBox.forEach(preview => {
              preview.classList.remove('active'); 
          });
      }
  };
});

window.onload = function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); 
};