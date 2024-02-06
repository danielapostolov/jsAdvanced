function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let divEl = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = 'none';


      divEl.addEventListener('click', clickHandler);

      divEl.appendChild(p);
      content.appendChild(divEl);
   }

   function clickHandler(event) {
      let p = event.currentTarget.children[0];  //curr target of event is divEl
      p.style.display = 'block';

   }
}
