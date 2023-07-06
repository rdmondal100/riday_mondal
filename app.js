
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageControlarTrans() {
    //Button click active class
    for(let i = 0; i<sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.toggle('active-btn');
            currentBtn[0].classList.toggle('active');
            this.classList.toggle('active-btn');
        })
    }

    //section active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id') || e.target.parentNode.getAttribute('data-id');
       console.log(id)
       console.log(e.target)
        if (id) {
          // remove selected from the other btns
          sectBtns.forEach((btn) => {
            btn.classList.remove('active');
          });
          e.target.closest('.control').classList.add('active');
      
          // hide other sections
          sections.forEach((section) => {
            section.classList.remove('active');
          });
      
          // show selected section
          const element = document.getElementById(id);
          element.classList.toggle('active');
        }
      });
      
    //Toggle theam
    const theamBtn = document.querySelector('.theam-btn');
    theamBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}




//form submssion
let url ='https://script.google.com/macros/s/AKfycbwWtiNld_1-ou-_skyJp_9ugLDOROyk8PqqLdGYISjfXcfzwLwEfN4L50FPIh5UOf7uqw/exec';
let form = document.querySelector('form');
const submitBtn = document.getElementById('submitBtn');

try{
form.addEventListener('submit',(e)=>{
 
    submitBtn.innerText="submitting";


    const onClickColor = document.getElementById('clickColor');
    onClickColor.style.background = 'var(--color-secondary)';
    onClickColor.style.color = 'var(--color-primary)';
    btnIcon.style.color = 'var(--color-primary)';
  
    let ClintData = new FormData(form);

    fetch(url, {
        method:"POST",
        body:ClintData,
    }).then((res)=>res.text())
    .then((result)=>{
        const reresponses=document.getElementById('response');
        reresponses.style.color="var(--color-success)";
        reresponses.style.background="var(--color-bg)";
        reresponses.style.boxShadow = '4px 3px 18px  rgb(3 253 3 / 10%)';

       submitBtn.innerHTML="submit";
    onClickColor.style = '';
    btnIcon.style = '';
       document.getElementById('response').innerHTML=result;
       form.reset();
       setTimeout(() => {
        document.getElementById('response').style.display='none'
       }, 5000);
    })
    .catch(error => {

        if (error instanceof TypeError && error.message.includes('Failed to fetch')){
            const reresponses=document.getElementById('response');
            reresponses.style.color="var(--color-faield)";
            reresponses.style.background="var(--color-bgf)";
            reresponses.style.boxShadow = '4px 3px 18px rgb(96 0 0 / 79%)';
            reresponses.innerHTML="❌ Failed to submit, Try again!";
            submitBtn.innerHTML="submit";
            onClickColor.style = '';
            btnIcon.style = '';
        }
    });

      e.preventDefault();
      
    

})
}

catch(error){
    console.log(error);
}


pageControlarTrans();


// controlls shadow
let prevScrollPos = window.scrollY;
const controlBar = document.querySelector('.controlls');

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    controlBar.classList.remove('hide');
  } else {
    controlBar.classList.add('hide');
  }

  prevScrollPos = currentScrollPos;
});

