"use strict"

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	let avg = (sum / arr.length).toFixed(2);
	avg = Number(avg);
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return 0
	}
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];
	let difference = 0;
	if (arr.length === 0) {
		return 0
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		difference = max - min;
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference = 0;
	if (arr.length === 0) {
		return 0
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
		difference = sumEvenElement - sumOddElement;
	}
	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let difference = 0;
	if (arr.length === 0) {
		return 0
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
		difference = sumEvenElement / countEvenElement;
	}
	return difference;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let arr = [...arrOfArr];
	for (let i = 0; i < arr.length; i++) {

		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
