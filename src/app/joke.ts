export default class Joke {
    hide: boolean = true;

    constructor(public setup: String, public punchline: String) {

    }

    toggle() {
        this.hide = !this.hide;
    }
}
