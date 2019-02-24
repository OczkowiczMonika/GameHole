export default class Wall{

    constructor(x, y, width, height){

        const wall = Matter.Bodies.rectangle(

            x,

            y,

            width,

            height,

            {

                render: {

                    fillStyle: 'white',

                    strokeStyle: 'white',

                    lineWidth: 15,

                    visible: false

                },

                isStatic: true,

                density: 10000

            }

        )

        return wall

    }

}
