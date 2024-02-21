

var content = document.querySelector('.content')
var input = document.querySelector('input')
var btnRemoveAll = document.querySelector(".remove-all")

var tags = ['Nodejs', 'Reactjs', 'Helloworld']

function createTags() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
            <li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick = "removeTag(${i})"></i>
            </li>
        `
    }
    content.appendChild(input)
	input.focus()
}

createTags()

input.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        createTags()
    }
})


function removeTag(index)   {
    tags.splice(index, 1)
    createTags()
}

btnRemoveAll.addEventListener('click', function() {
    tags = []
    createTags()
})