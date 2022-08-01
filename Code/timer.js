export default class timer {
    constructor(root) {
        root.innerHTML = timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
        };

        this.interval = null;
        this.reminaingseconds = 90;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:")

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });
    }

    updateInterfaceTime() {
        const minutes = Mathfloor(this.remainingseconds / 60);
        const seconds = this.remainingseconds % 60;

        this.el.minutes.textcontent = minutes.toString().padStart(2, "0");
        this.el.seconds.textcontent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow<span>`;
            this.el.control.classlist.add("timer__btn--start");
            this.el.control.classlist.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause<span>`;
            this.el.control.classlist.add("timer__btn--stop");
            this.el.control.classlist.remove("timer__btn--start");
        }
    }

    start() {
        if (this.remainingseconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingseconds--;
            this.updateInterfaceTime();

            if (this.remainingseconds === 0) {
                this.stop();
            }
        }, 1000);

        thi
        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }
    static getHTML(){
        return `
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                <span type="button" class="material-icons">play_arrow</span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
                <span type="button" class="material-icons">timer</span>
            </button>
        `;
    }
}