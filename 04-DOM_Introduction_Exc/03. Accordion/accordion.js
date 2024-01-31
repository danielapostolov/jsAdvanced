function toggle() {
   
    let text = document.querySelector('#extra');
    let button = document.querySelector('span.button');

    if(button.textContent == 'More' ){
        text.style.display = 'block';
        button.textContent = 'Less';
    }else{  
        text.style.display = 'none';
        button.textContent = 'More'
    }

}