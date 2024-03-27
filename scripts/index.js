let rowElement = document.querySelector('.row');
let boxModel = document.querySelector('.box-modal');
rowElement.addEventListener('click',function(e){
  let check = e.target.closest('.item-content')
  if(check !== null){
    boxModel.classList.replace('d-none','d-flex');
  }
})

