function compareArrays(arr1, arr2) {
	let result;

	result = (arr1.length === arr2.length) && arr1.every((item, idx) => item === arr2[idx]);

	return result;

}



function getUsersNamesInAgeRange(users, gender) {
	let result1 = users.filter(user => user.gender === gender);
	let result2 = result1.map(users => users.age);
	if (result1.length === 0) {
		return 0;
	}

	let result3 = result2.reduce((total, amount, index, array) => {
		total += amount;

		if (index === array.length - 1) {
			return total / array.length;
		} else {
			return total;
		}
	});
	return result3;
}