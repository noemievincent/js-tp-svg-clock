const Clock = {
    /**
     * Initializes the clock.
     */
    init() {
        this.SECONDS_IN_ONE_HOUR = 60 * 60; // 60 secondes * 60 minutes
        this.MINUTES_IN_ONE_DAY = 23 * 60; // 24 hours * 60 minutes
        this.loadElements();
        setInterval(this.renderClock.bind(this), 1000); // You have to force the context of the renderClock function to this.
    },
    /**
     * Load the 3 hands in the memory.
     */
    loadElements() {
        this.minutes = document.getElementById('minutes');
        this.seconds = document.getElementById('seconds');
        this.hours = document.getElementById('hours');
    },
    /**
     * Calculates the rotation of the hands and places them according to
     */
    renderClock() {
        const dataTime = new Date();
        const rotationForSeconds = dataTime.getSeconds() * 6;
        const rotationForMinutes = (dataTime.getMinutes() / 60 + dataTime.getSeconds() / this.SECONDS_IN_ONE_HOUR) * 360;
        const rotationForHours = ((dataTime.getHours() % 12 || 12) / 12 + dataTime.getMinutes() / this.MINUTES_IN_ONE_DAY) * 360;
        //console.log(`${dataTime.getHours()} : ${dataTime.getMinutes()} : ${dataTime.getSeconds()}`);
        //console.log(`${rotationForHours} : ${rotationForMinutes} : ${rotationForSeconds}`);
        this.seconds.setAttribute('transform', `rotate(${rotationForSeconds} 16 17)`);
        this.minutes.setAttribute('transform', `rotate(${rotationForMinutes} 16 17)`);
        this.hours.setAttribute('transform', `rotate(${rotationForHours} 16 17)`);
    }
};
Clock.init();



