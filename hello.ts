const greeter = (person: string) => {
	return 'Hello, ' + person;
};

let user: string = 'Mawatta Camara';

document.body.innerText = greeter(user);
