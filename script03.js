function refrigerator(num){
	if (num == 1) {
		return "Shelf 1 is Fruits";
	}
	else if (num == 2) {
		return "Shelf 2 is Vegtables"
	}
	else if (num == 3) {
		return "Shelf 3 is Dairy"
	}
	else {
		return "Meat is in the Freezer"
	}
}

console.log(refrigerator(Math.floor (Math.random() *5)));