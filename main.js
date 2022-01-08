(function (){
    const oClock = {
        init() {
            this.date;
            this.iSeconds;
            this.iMinutes;
            this.iHours;
            this.iSecondsD;
            this.iMinutesD;
            this.iHoursD;
            this.intervalID;

            intervalID = setInterval(()=>{
                this.date = new Date();
                this.iSeconds = this.date.getSeconds();
                this.iMinutes = this.date.getMinutes();
                this.iHours = this.date.getHours();
                this.iSecondsD = (this.iSeconds/60)*360;
                this.iMinutesD = (this.iMinutes/60 + ((this.iSeconds/60)/60))*360;
                this.iHoursD = (this.iHours/12 + ((this.iMinutes/60)/12))*360;

                if (this.iHours > 12) {
                    this.iHoursD -= 360;
                }

                document.querySelector("#seconds").setAttribute("transform", `rotate(${this.iSecondsD} 16 17)`);
                document.querySelector("#minutes").setAttribute("transform", `rotate(${this.iMinutesD} 16 17)`);
                document.querySelector("#hours").setAttribute("transform", `rotate(${this.iHoursD} 16 17)`);
                console.log(`${this.iHours} : ${this.iMinutes} : ${this.iSeconds}`);
                console.log(`${this.iHoursD} : ${this.iMinutesD} : ${this.iSecondsD}`);
            }, 1000);
        }
    }
    oClock.init();
})();



