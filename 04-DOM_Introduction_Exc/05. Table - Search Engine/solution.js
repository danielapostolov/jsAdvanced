function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsArr = Array.from(document.querySelector('.container tbody').children);
      let searchFieldText = document.getElementById('searchField').value;

      for (let row of rowsArr) {
         let cellsArr = Array.from(row.children);
         for (cell of cellsArr) {
            let cellContent = cell.textContent;
            if(cellContent.includes(searchFieldText)){
               row.classList.add("select");
               break;
            }else{
               row.classList.remove("select");
            }
            searchFieldText.value = '';
         }
      }
   }
}