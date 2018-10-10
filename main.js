let numInput = document.querySelector('#numInput');
let respOutput = document.querySelector('#respOutput');

const getFact = () => {
    let number = numInput.value;

    if (number !='') {
    axios.get('http://numbersapi.com/'+number)
    .then(response => {
        respOutput.innerText = response.data;
    })
    .catch(error => {
        console.log(error);
    })
 }
}
    
// Listening to events
    numInput.addEventListener('input', getFact);