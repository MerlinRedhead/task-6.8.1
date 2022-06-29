const text = document.querySelector('#text')
const button = document.querySelector('#del')
const duplicateField = document.querySelector('#duplicateField');

text.addEventListener('input',function(event){
  duplicateField.textContent=text.value;
})


button.addEventListener('click',function(event){
  console.log(text.value)
  event.preventDefault();
  text.value='';
  duplicateField.textContent='';
})


