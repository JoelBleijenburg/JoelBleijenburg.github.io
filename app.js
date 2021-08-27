class clock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }


    update() {
        const parts = this.time();
        const secondsFormatted = parts.seconds.toString().padStart(2, "0");
        const minuteFormatted = parts.minutes.toString().padStart(2, "0");
        const timeFormatted = `${parts.hours}:${minuteFormatted}:${secondsFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        if (parts.days == 1) {
            this.element.querySelector(".mon").style.backgroundColor = "black";
            this.element.querySelector(".mon").style.color = "white";

        }
        if (parts.days == 2) {
            this.element.querySelector(".tue").style.backgroundColor = "black";
            this.element.querySelector(".tue").style.color = "white";
        }
        if (parts.days == 3) {
            this.element.querySelector(".wed").style.backgroundColor = "black";
            this.element.querySelector(".wed").style.color = "white";
        }
        if (parts.days == 4) {
            this.element.querySelector(".thu").style.backgroundColor = "black";
            this.element.querySelector(".thu").style.color = "white";
        }
        if (parts.days == 5) {
            this.element.querySelector(".fri").style.backgroundColor = "black";
            this.element.querySelector(".fri").style.color = "white";
        }
        if (parts.days == 6) {
            this.element.querySelector(".sat").style.backgroundColor = "black";
            this.element.querySelector(".sat").style.color = "white";
        }
        if (parts.days == 7) {
            this.element.querySelector(".sun").style.backgroundColor = "black";
            this.element.querySelector(".sun").style.color = "white";
        }

        const sound = document.querySelector("#alarm-sound");
        const stop = document.querySelector("#stop");


        if (timeFormatted == `17:31:55`) {
            sound.play();
            stop.addEventListener("click", () => {
                sound.pause();
            });
        }

        this.element.querySelector('.clock-time').textContent = timeFormatted;
        this.element.querySelector('.clock-ampm').textContent = amPm;

    }

    time() {
        var currentTime = new Date();

        return {
            days: currentTime.getDay(),
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            isAm: currentTime.getHours() < 12,
        };

    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new clock(clockElement);

clockObject.start();
