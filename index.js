let chars = document.querySelector('#chars')
let words = document.querySelector('#words')
let evaluate = document.querySelector('.btn')
evaluate.addEventListener('click', () => {
    let input = document.querySelector('#input').value;
    chars.innerHTML = input.length

    // Words evaluation
    input = input.trim()
    let word = input.split(' ');
    let cleanlist = word.filter(function (elm) {
        return elm != '';
    });
    words.innerHTML = cleanlist.length


})