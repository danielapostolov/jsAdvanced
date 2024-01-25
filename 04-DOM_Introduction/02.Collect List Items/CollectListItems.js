function extractText() {
    let list = document.getElementById('items');
    let textArea = document.getElementById('result');

    let result = '';

    let items = Array.from(list.children)

    for (let item of items) {
        let content = item.textContent;
        result += content + '\n';
    }
    textArea.value = result;
}