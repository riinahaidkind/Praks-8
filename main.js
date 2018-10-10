let numInput = document.querySelector('#numInput');
let respOutput = document.querySelector('#respOutput');
let incInput = document.querySelector('#incInput');

const getFact = () => {
    respOutput.innerHTML = ''
    let number = numInput.value;
    let inc = incInput.value;
    let baseUrl = 'http://numbersapi.com/'
    // vaja saada sarnane URL
    // http://numbersapi.com/1..3
    
    let url = `${baseUrl}${number}..${parseInt(number) + parseInt(inc)}`;

    if (number !='' && inc != '') {
    axios.get(url)
    .then(response => {
        for (let item in response.data){
            let li = document.createElement('li');
            li.innerText = response.data[item];
            
            respOutput.appendChild(li);
        }
    })
    
    .catch(error => {
        console.log(error);
    })
 }
    
}
    
// Listening to events
numInput.addEventListener('input', getFact);
incInput.addEventListener('input', getFact);