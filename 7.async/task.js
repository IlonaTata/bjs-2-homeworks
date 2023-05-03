class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(clock, callback) {
		let call = {
			callback: callback,
			time: clock,
			canCall: true,
		}
		if (clock === null || callback === undefined)
			throw new Error('Отсутствуют обязательные аргументы')
		for (clock in this.alarmCollection) {
			if (clock === call)
				console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push(call);
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(clock => {
			return clock.time != time
		});
	}
	getCurrentFormattedTime() {
		var now = new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
		return now;
	}
	start() {
		if (this.intervalId != null) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((clock) => {
				if (clock.time === this.getCurrentFormattedTime() && clock.canCall === true) {
					clock.canCall = false;
					clock.callback();
				}
			})
		}, 1000);
	}
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	resetAllCalls() {
		this.alarmCollection.forEach((clock) => {
			clock.canCall = true
		});
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}