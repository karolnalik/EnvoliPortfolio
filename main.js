
      window.addEventListener("scroll", function(){
      var header = document.querySelector("nav");
      header.classList.toggle("scrollmenu", window.scrollY  > 3)
      })

