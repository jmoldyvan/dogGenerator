//Get a dog photo from the dog.ceo api and place the photo in the DOM
const breeds_url = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(breeds_url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedObj = data.message; //turn method into obj
        const breedsArr = Object.keys(breedObj) //turn object into array
        for (let i = 0; i < breedsArr.length; i++) {
            const option = document.createElement('option')
            option.value = breedsArr[i]
            option.innerText = breedsArr[i]//display breed inside the thing
            select.appendChild(option) //this will append each option to select dropdown box
        }
    })
// when the thing changes we want to pass in an event function
select.addEventListener('change', event => {

    //this will have a var to show the pic we want. look for target on console log. then gat  its value
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getdogimg(url)
})

const img = document.querySelector('.dog_img')

const getdogimg = url => {
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            img.src = data.message
        })
}

