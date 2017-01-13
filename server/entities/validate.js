exports.integer = (...args) => {
	for (let arg of args) {
		if(!Number.isSafeInteger(Number.parseInt(arg))){
			return false;
		}
	}
	return true;
}