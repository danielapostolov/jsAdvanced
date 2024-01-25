function editElement(ref, match, replacer) {
    // TODO
    let content = ref.textContent;
    let edited = content.split(match).join(replacer);
    ref.textContent = edited;
    
}
