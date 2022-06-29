const Content = document.querySelector('#Content');
Content.onclick = function(){
    const Text = prompt('Введите текст');
    Content.textContent=Text;
}
