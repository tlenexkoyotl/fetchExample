function fetchCharacter() {
	fetch('https://rickandmortyapi.com/api/character/')
	.then((response) => {
		if (response.status != 200){
			console.log(`Status code: ${response.status}, there has been a problem D:`)
			return;
		}

		response.json()
			.then((data) => {
				const character = data.results[0]

				console.log(`Got data correctly :D ${JSON.stringify(character)}`)
				document.getElementById('name').innerHTML= character.name
				document.getElementById('image').setAttribute('src', character.image)
			})
	})
	.catch((exception) => {
		console.log(`Fetch exception: ${exception}`)
	})

}