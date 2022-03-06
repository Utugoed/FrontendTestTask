var app = new Vue({
    el: '#app',
    data: {
        wall_length: 5,
        wall_height: 2.7,
        holes: [
            {
                "width": 90,
                "height": 205
            }
        ],
        block_type: "empty",
        block_cost: 200,
        work_cost: 150,
        block_square: 0.2,
        blocks_number: "",
        blocks_cost: "",
        glue_mass: "",
        glue_packs_number: "",
        whole_work_cost: "",
        whole_weight: "",
        load: ""
    },
    methods:{
        newHole() {
            app.holes.push({
                "width": 90,
                "height": 205
            })
        },
        count() {
            var square
            square = app.wall_height*app.wall_length

            for (var i in app.holes) {
                console.log(app.holes[i])
                square = square - (app.holes[i].width / 100) * (app.holes[i].height / 100)
            }
            app.blocks_number =  Math.ceil(square/app.block_square, 1)
            app.blocks_cost = app.blocks_number * app.block_cost
            app.glue_packs_number = Math.ceil(app.blocks_number / 69)
            app.glue_mass = app.glue_packs_number * 23
            app.whole_work_cost = app.blocks_number * app.work_cost
            app.whole_weight = app.blocks_number * (1 - (app.block_type == "empty")*0.5)
            app.load = Math.round(app.whole_weight/app.wall_length, -1)
            document.getElementById('answer').hidden = false;
        }
    }

})
