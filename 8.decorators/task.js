//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args); // получаем правильный хеш c помощью функции md5
		let objectInCache = cache.find((item) => {
			if (item['hash'] === hash) {
				return item;
			}
		}); // ищем элемент, хеш которого равен нашему хешу
		if (objectInCache) { // если элемент найден
			console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
			return "Из кэша: " + objectInCache.value;
		}

		let result = func(...args);
		let correctlyElement = {
			hash: hash,
			value: result
		}; // в кеше результата нет — придётся считать
		cache.push(correctlyElement); // добавляем элемент с правильной структурой
		if (cache.length > 5) {
			cache.shift();
			// если слишком много элементов в кеше, надо удалить самый старый (первый) 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let count = 0;
	let allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++;
		if (timeoutId === null) {
			func.apply(this, args);
			wrapper.count++;
		}
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
		}, delay);
	}
	wrapper.allCount = allCount;
	wrapper.count = count;
	return wrapper;
}