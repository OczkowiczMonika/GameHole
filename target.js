export default class Target{

    constructor(x, y){

        const target = Matter.Bodies.circle(

            x,

            y,

            20,

            {

                label: 'target',

                render: {

                    fillStyle: 'green',

                    strokeStyle: 'green',

                },

                isStatic: true

            }

        )

        return target

    }

}
