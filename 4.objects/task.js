function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if ('marks' in this === true) {
		this.marks.push(...marksToAdd)
	};
}

Student.prototype.getAverage = function() {
	let sum = 0;
	if ('marks' in this === false || this.marks.length === 0) {
		return 0;
	}
	for (let n = 0; n < this.marks.length; n++) {
		sum = sum + this.marks[n];
	}
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}