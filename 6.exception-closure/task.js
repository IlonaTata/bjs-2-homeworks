"use strict"
function parseCount(a) {
	let result = Number.parseFloat(a);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result
}

function validateCount(a) {
    let result;
	try {
		result = parseCount(a);
	} catch (error) {
		return error;
	}
	return result;
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}
	get perimeter() {
		let p = this.a + this.b + this.c;
		return p;
	}
	get area() {
		let polPerimeter = this.perimeter / 2;
		let s = Math.sqrt((polPerimeter * (polPerimeter - this.a) * (polPerimeter - this.b) * (polPerimeter - this.c)));
		let square = Number(s.toFixed(3));
		return square;
	}
}

function getTriangle(a, b, c) {
	let triangle;
	try {
		triangle = new Triangle(a, b, c);
		return triangle;

	} catch (error) {
		return triangle = {

			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}