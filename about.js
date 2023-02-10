console.log("hello world");

let handleSubmit = (evt) => {
	evt.preventDefault();
	alert('Form submitted successfully!');
}

let complementUser = () => {
	alert('You bring much joy to the people in your life!');
}

let form = document.querySelector('#submitButton');
let img = document.querySelector('#catPhoto')

form.addEventListener('click', handleSubmit);
img.addEventListener('mouseover', complementUser);