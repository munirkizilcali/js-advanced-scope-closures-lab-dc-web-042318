function produceDrivingRange (blockRange) {
	return function (block1, block2){
		const diff = blockRange - Math.abs(block1.split("th")[0]-block2.split("th")[0])
		if (diff >= 0) {
			return `within range by ${diff}`
		} else {
			return `${-diff} blocks out of range`
		}
	}
}

function produceTipCalculator (percent) {
	return function (bill) {
		return bill*percent
	}
}