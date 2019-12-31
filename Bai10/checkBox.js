const checkboxs = document.querySelectorAll('input[type="checkbox"]');
let firtCheck;

function holdShift(e) {
    let checkBetween= false;
    if (e.shiftKey && this.checked)
      {
        checkboxs.forEach((check,i) =>{
            if (check===this || check===firtCheck) // đúng lần đầu xem như lấy ở giữa, đúng lần sau xem như ra khỏi
               checkBetween = !checkBetween;
             if (checkBetween)
               check.checked = true;
        })
      }
    firtCheck = this;  
}

checkboxs.forEach(check => check.addEventListener('click', holdShift))
