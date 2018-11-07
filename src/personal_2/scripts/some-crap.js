
changeLight() {
	for (let i = 0; i < this.item.length; i++) {
		this.item[i].addEventListener('click', () => {
			this.tornOnLight(this.item[i]);
		});
	}
}

disableLight() {
	this.item.forEach(element => {
		let new_element = element.cloneNode(true);
		element.replaceWith(new_element);
});
console.log(this.item);
}