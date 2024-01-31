function solve() {
  let text = (document.getElementById('text').value).toLowerCase();
  let convention = document.getElementById('naming-convention').value;

  let result = '';
  if (convention == 'Camel Case') {
    let textArr = text.split(' ');

    result += textArr.shift();
    textArr.forEach(x => result += x[0].toUpperCase() + x.substring(1))

  } else if (convention == 'Pascal Case') {
    let textArr = text.split(' ');
    textArr.forEach(x => x.toLowerCase());
    textArr.forEach(x => result += x[0].toUpperCase() + x.substring(1))
  } else {
    result += 'Error!';
  } 

  let resultRef = document.getElementById('result');
  resultRef.textContent = result;

}