const RightTriangleStarPattern = (size) => {
	for (let y = 0; y < size; y++) {
		let temp = ''

		for (let x = 0; x <= y; x++) {
			temp += '*'
		}

		console.log(temp)
	}
}

RightTriangleStarPattern(5)
