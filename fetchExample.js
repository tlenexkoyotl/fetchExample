function fetchCharacter() {
	fetch('https://rickandmortyapi.com/api/character/')
	.then((response) => {
		if (response.status != 200) {
			console.log(`Status code: ${response.status}, there has been a problem D:`)
			return;
		}

		response.json()
			.then((data) => {
				const characterList = data.results
				const characters = document.getElementById('characters')

				console.log(`Got data correctly :D ${JSON.stringify(characterList)}`)

				characterList.forEach((character, index) => {
					const characterNode = document.createElement('div')
					const nameNode = document.createElement('div')
					const pictureNode = document.createElement('div')
					const imageNode = document.createElement('img')

					characterNode.setAttribute('id', `character_${index}`)
					nameNode.setAttribute('id', `character_${index}_name`)
					nameNode.appendChild(document.createTextNode(character.name))
					pictureNode.setAttribute('id', `character_${index}_picture`)
					imageNode.setAttribute('id', `character_${index}_image`)
					imageNode.setAttribute('src', character.image)
					pictureNode.appendChild(imageNode)
					characterNode.appendChild(nameNode)
					characterNode.appendChild(pictureNode)
					characters.appendChild(characterNode)
				})
			})
	})
	.catch((exception) => {
		console.log(`Fetch exception: ${exception}`)
	})

}