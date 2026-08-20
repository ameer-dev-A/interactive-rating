  let btn = document.querySelectorAll('.btns button');
     let sub = document.querySelector('.sub');
      let all = document.querySelector('.all');
       let thx = document.querySelector('.thx');
     let res =document.querySelector('.res');

     btn.forEach((bt)=>{
      bt.addEventListener('click',(e)=>{
        e.target.style.background = "white";
        res.innerHTML  = e.target.value ;
      })
     })
     sub.onclick=()=>{
       all.style.display="none";
       thx.style.display="block";
     }