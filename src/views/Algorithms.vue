<template>
    <div class="app-page">
        <h4 class="title">Algorithms!</h4>
        <h5>Subtitle: My engagement in COSC31 - Algorithm Design with Professor Chakrabarti, 21S</h5>
        <h6>(Sub-subtitle aka the Credit Statement: I worked on this project alone with no help from outside sources)</h6>

        <p>
            As I would imagine is the case with many students who take an algorithm design class, I was super apprehensive going into the start of the term.
            However, I feel like the ways in which I engaged in the class helped me understand algorithm design better, be a more creative programmer, and tackle
            challenges presented to me in this class.
        </p>
        <p>
            The first way that I engaged in the class was by having active discussions about all of the ungraded problem sets and trying to solve them with classmates.
            Also, every time we came across an algorithm that I found a bit (or a lot) confusing in class, I made sure to read about it in the textbook, draw out its execution,
            and spent a lot of time digging through the depths of Youtube watching every single lecture I could find about it to the point where honestly I could
            probably just submit my Youtube watched history and you would be conviced that I was very very VERY engaged in the class. I also frequented office hours
            with Jonathan and other TAs.
        </p>
        <p>
            However, most of my engagement hasn't really been tangible enough to submit as proof, so here is my little project of the term. In the graph below, watch Prims MST Algorithm
            do its thing and interact with this graphic!
        </p>
        <p>Prims Minimum Spanning Tree algorithm in action. Fill in the inputs and interact to see how the algorithm works!</p>
        <input placeholder="How many vertices?" v-model="n"><p>Click to see Prims run on a graph with {{ n }} vertices.</p>
        <button type="button" @click="createGraph">Make the Graph!</button>
        <button type="button" v-show=initialized @click="primsMST">Run Prims</button>
        <canvas id="myCanvas" height="600" width="800">
             Your browser does not support the canvas element.
        </canvas>
    </div>
</template>
<script>
export default {
    name: 'Prims',
    data() {
        return {
            graph: {
                "nodes": [],
                "edges": []
            },
            width: 800,
            height: 600,
            radius: 10,
            n: 0,
            m: 0,
            unvisColor: "red",
            visColor: "blue",
            initialized: false,
        }
    },
    methods: {
        createGraph() {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, this.width, this.height);

            this.graph.nodes = []
            this.graph.edges = []

            for(var i = 0; i < this.n; i ++) {
                var x = Math.random()*this.width;
                var y = Math.random()*this.height;

                if(x < 25) {
                    x = x + 25
                }
                if(x > this.width - 25) {
                    x = x - 25
                }

                if(y < 25) {
                    y = y + 25
                }
                if(y > this.height - 25) {
                    y = y - 25
                }

                var v = {
                        "id": i,
                        "x": x,
                        "y": y,
                        "visited": false,
                        "adj": []
                    }
                this.graph.nodes.push(v);
                this.drawVert(v, false);
            }
            this.graph.nodes.forEach((n, i) => {
                for(var j = 0; j < this.graph.nodes.length; j++){
                    if(i != j) {
                        var ux = this.graph.nodes[j].x;
                        var vx = this.graph.nodes[i].x;
                        var uy = this.graph.nodes[j].y;
                        var vy = this.graph.nodes[i].y;

                        var weight = ((ux - vx)**2 + (uy - vy)**2)**0.5

                        var e = {
                        "head": n.id,
                        "tail": this.graph.nodes[j].id,
                        "cost": weight,
                        "visited": false
                        }
                        this.graph.edges.push(e);
                        this.addWeightedEdge(n, this.graph.nodes[j], e);
                        this.drawEdge(n, this.graph.nodes[j], weight, false);
                    }
                }
            });
            if(this.n > 1) {
                this.initialized = true;
            }

        },
        drawVert(v, visited) {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            ctx.moveTo(v.x, v.y);
            ctx.arc(v.x, v.y, this.radius, 0, 2*Math.PI);
            if(visited) {
                ctx.fillStyle = this.visColor;
            }
            else {
                ctx.fillStyle = this.unvisColor;
            }
            ctx.fill();
        },
        drawEdge(v, u, weight, visited) {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(v.x, v.y);
            if(visited) {
                ctx.strokeStyle = this.visColor;
            }
            else {
                ctx.strokeStyle = this.unvisColor;
            }
            ctx.lineTo(u.x, u.y);
            ctx.stroke();

            var midX = (v.x + u.x) / 2;
            var midY = (v.y + u.y) / 2;

            ctx.font = "lighter 12px Arial";
            var wPrint = weight.toFixed(2);
            ctx.strokeStyle = "black";
            ctx.strokeText(wPrint, midX, midY);
        },
        addWeightedEdge(u, v, e) {
            this.graph.nodes[u.id].adj.push(e)
            this.graph.nodes[v.id].adj.push(e)
        },
        primsMST() {
            var ePrime = {}
            var par = {}
            var key = {}

            this.graph.nodes.forEach((n, i) => {
                par[i] = "None";
                key[i] = Number.MAX_VALUE;
                ePrime[i] = false
            });
            key[0] = 0;
            par[0] = -1;
            this.drawVert(this.graph.nodes[0], true);

            for(var j = 0; j < this.n; j ++) {
                var u = this.minKey(key, ePrime);

                ePrime[u] = true;
                this.drawVert(this.graph.nodes[u], true)

                if(u != -1) {
                    this.graph.nodes[u].adj.forEach((e, i) => {
                        if(u == e.head) {
                            var v = e.tail;
                        }
                        else {
                            var v = e.head;
                        }
                        if(e.cost < key[v] && ePrime[v] == false){
                            par[v] = u
                            key[v] = e.cost
                        }
                    });
                }
                else {
                    var j = this.n
                }
            }

            this.drawMST(par);
            var last = this.graph.nodes.length - 1;

            this.drawVert(this.graph.nodes[last], true);

        },
        minKey(key, ePrime) {
            var min = Number.MAX_VALUE
            var min_index = -1;

            for (var v = 0; v < this.n; v++) {
                if (ePrime[v] === false && key[v] < min) {
                    min = key[v];
                    min_index = v;
                }
            }
            return min_index;
        },
        drawMST(par) {
            var mstCost = 0;
            for(var j = 0; j < this.n; j++) {
                this.graph.edges.forEach((e, i) => {
                    if(e.head == par[j] && e.tail == j) {
                        var u = this.graph.nodes[par[j]];
                        var v = this.graph.nodes[j];
                        mstCost = mstCost + e.cost;
                        this.drawEdge(u, v, e.cost, true)
                    }
                });
            }
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            ctx.font = "lighter 16px Arial";
            var cPrint = mstCost.toFixed(2);
            ctx.strokeStyle = "black";
            ctx.strokeText("Cost of MST is " + cPrint, 20, 20);
        }

    }
}
</script>
<style lang="scss" scoped>
.title {
    margin: 12px;
}
.app-page{
    display: flex;
    align-items: center;
    flex-direction: column;
}

button {
  background-color: #3777ff;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5%;
}

button {
  background-color: white;
  color: black;
  border: 2px solid #3777ff;
}

button:hover {
  background-color: #3777ff;
  color: white;
}

canvas {
    width: 800px;
    height: 600px;
    border:1px solid #d3d3d3;
    margin-bottom: 16px;
}
p {
    padding-left: 10%;
    padding-right: 10%;
}
</style>