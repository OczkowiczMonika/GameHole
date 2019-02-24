export default class Counter{

    constructor({

        endGame, score = _ => {}

    } = {}) {

        this.placeToRender = document.querySelector('.counter'), 

        this.time = 10,

        this.callback = endGame;

        this.score = score;

        this.timer = this.render(this.placeToRender, this.time);

    }



    render(place, time){

        place.innerText = `Time: ${time} Score: ${this.score()}`;

        this.time = time;

        if(time > 30){

            place.style.color = `rgb(25, 167, 60)`;

            setTimeout(() => { this.render(place, time-1) }, 1000)

        }else if(time > 10 && time <= 30){

            place.style.color = `rgb(255, 255, 0)`;

            setTimeout(() => { this.render(place, time-1) }, 1000)

        }else if( time > 0  && time <= 10 ) { 

            place.style.color = `rgb(255, 0, 0)` 

            setTimeout(() => { this.render(place, time-1) }, 1000)

        }

        else if( time <= 0 ){

            this.callback();

        }

    }

}
