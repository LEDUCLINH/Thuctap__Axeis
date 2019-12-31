const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
       if (this.getAttribute('class').includes('open')) {
         this.classList.remove('open')
       }
       else {
        panels.forEach(panel =>{
            panel.classList.remove('open');
        })
      this.classList.add('open');
        }
        if (this.getAttribute('class').includes('active')) {
          this.classList.remove('active')
        }
        else {
         panels.forEach(panel =>{
             panel.classList.remove('active');
         })
       this.classList.add('active');
         }
    }
    // function toggleActive() {
     
    // }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    //panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
