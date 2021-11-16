class Timer {
    constructor(timeElement, time = 30) {
        this.time = time;
        this.defaultTime = time;
        this.timeElement = timeElement;
        this.intervalId = null;
    }

    tick() {
        if (!this.time) {
            return this.stop();
        }

        this.time = this.time - 1;
        this.timeElement.textContent = `0:${this.time}`;
    }

    start() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.timeElement.style.color = 'red';
        this.time = this.defaultTime;
    }
}

export const timer = new Timer();