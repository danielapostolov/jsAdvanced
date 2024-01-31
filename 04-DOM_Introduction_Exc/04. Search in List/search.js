function search() {

   let listArr = Array.from(document.getElementById('towns').children);
   let searchFieldText = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let matches = 0;
   listArr.forEach(x => x.style.textDecoration = 'none');
   listArr.forEach(x => x.style.fontWeight = '');

   for (let townRef of listArr) {
      let town = townRef.textContent;

      if (town.includes(searchFieldText)) {
         matches++;
         townRef.style.textDecoration = 'underline';
         townRef.style.fontWeight = 'bold';
      }
   }

   result.textContent = `${matches} matches found`;
}