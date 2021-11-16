const width = 800;
const height = 600;
const centerX = width / 2;
const centerY = height / 2;
const lineThickness = 1;
const outerRadarLine = 240;
const middleOutRadarLine = 180;
const middleInRadarLine = 120;
const innerRadarLine = 60;
const lineSep = 15;
const title = "Technology Radar";

const firstOuterArc = d3.arc()
    .innerRadius(outerRadarLine)
    .outerRadius(outerRadarLine + lineThickness)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const firstMiddleOutArc = d3.arc()
    .innerRadius(middleOutRadarLine)
    .outerRadius(middleOutRadarLine + lineThickness)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const firstMiddleInArc = d3.arc()
    .innerRadius(middleInRadarLine)
    .outerRadius(middleInRadarLine + lineThickness)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const firstInnerArc = d3.arc()
    .innerRadius(innerRadarLine)
    .outerRadius(innerRadarLine + lineThickness)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const secondOuterArc = d3.arc()
    .innerRadius(outerRadarLine)
    .outerRadius(outerRadarLine + lineThickness)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI);

const secondMiddleOutArc = d3.arc()
    .innerRadius(middleOutRadarLine)
    .outerRadius(middleOutRadarLine + lineThickness)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI);

const secondMiddleInArc = d3.arc()
    .innerRadius(middleInRadarLine)
    .outerRadius(middleInRadarLine + lineThickness)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI);

const secondInnerArc = d3.arc()
    .innerRadius(innerRadarLine)
    .outerRadius(innerRadarLine + lineThickness)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI);

const thirdOuterArc = d3.arc()
    .innerRadius(outerRadarLine)
    .outerRadius(outerRadarLine + lineThickness)
    .startAngle(Math.PI)
    .endAngle(Math.PI * 3 / 2);

const thirdMiddleOutArc = d3.arc()
    .innerRadius(middleOutRadarLine)
    .outerRadius(middleOutRadarLine + lineThickness)
    .startAngle(Math.PI)
    .endAngle(Math.PI * 3 / 2);

const thirdMiddleInArc = d3.arc()
    .innerRadius(middleInRadarLine)
    .outerRadius(middleInRadarLine + lineThickness)
    .startAngle(Math.PI)
    .endAngle(Math.PI * 3 / 2);

const thirdInnerArc = d3.arc()
    .innerRadius(innerRadarLine)
    .outerRadius(innerRadarLine + lineThickness)
    .startAngle(Math.PI)
    .endAngle(Math.PI * 3 / 2);

const fourthOuterArc = d3.arc()
    .innerRadius(outerRadarLine)
    .outerRadius(outerRadarLine + lineThickness)
    .startAngle(Math.PI * 3 / 2)
    .endAngle(2 * Math.PI);

const fourthMiddleOutArc = d3.arc()
    .innerRadius(middleOutRadarLine)
    .outerRadius(middleOutRadarLine + lineThickness)
    .startAngle(Math.PI * 3 / 2)
    .endAngle(2 * Math.PI);

const fourthMiddleInArc = d3.arc()
    .innerRadius(middleInRadarLine)
    .outerRadius(middleInRadarLine + lineThickness)
    .startAngle(Math.PI * 3 / 2)
    .endAngle(2 * Math.PI);

const fourthInnerArc = d3.arc()
    .innerRadius(innerRadarLine)
    .outerRadius(innerRadarLine + lineThickness)
    .startAngle(Math.PI * 3 / 2)
    .endAngle(2 * Math.PI);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Var1: "Quadrant",
            Var2: "Level of implementation",
            Var3: "Technology",
            Var4: "Title",
            Var5: "Description",
            counter: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            itemId: 0
        };
    }
    componentDidMount() {
        d3.csv("https://raw.githubusercontent.com/HVKHVK/Digital-Technology-Radar-Project/master/data/Techradar_dataset%20-%20Test%20Assignment.csv", (err, data) => {
            this.setState({ data: data });
        });
    }

    updatePoints(){
        let allData = this.state.data.map((d) => {
            let xPoint = 0;
            let yPoint = 0;
            let color = "black";
            let title =  "-Item " + d[this.state.Var4].split(" ")[2];
            let itemX = 0;
            let itemY = 0;
            let description = "";
            if (d[this.state.Var1] === "response" && d[this.state.Var2] === "production") {
                xPoint = Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = -Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2));
                itemX = 120;
                itemY = 520 + this.state.counter[0] * lineSep;
                this.state.counter[0]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "validation") {
                xPoint = Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 120;
                itemY = 370 + this.state.counter[1] * lineSep;
                this.state.counter[1]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "prototype") {
                xPoint = Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 120;
                itemY = 220 + this.state.counter[2] * lineSep;
                this.state.counter[2]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "idea") {
                xPoint = Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 120;
                itemY = 70 + this.state.counter[3] * lineSep;
                this.state.counter[3]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "production") {
                xPoint = Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 320;
                itemY = 520 + this.state.counter[4] * lineSep;
                this.state.counter[4]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "validation") {
                xPoint = Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 320;
                itemY = 370 + this.state.counter[5] * lineSep;
                this.state.counter[5]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "prototype") {
                xPoint = Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 320;
                itemY = 220 + this.state.counter[6] * lineSep;
                this.state.counter[6]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "idea") {
                xPoint = Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 320;
                itemY = 70 + this.state.counter[7] * lineSep;
                this.state.counter[7]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "production") {
                xPoint = -Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 220;
                itemY = 520 + this.state.counter[8] * lineSep;
                this.state.counter[8]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "validation") {
                xPoint = -Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 220;
                itemY = 370 + this.state.counter[9] * lineSep;
                this.state.counter[9]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "prototype") {
                xPoint = -Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 220;
                itemY = 220 + this.state.counter[10] * lineSep;
                this.state.counter[10]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "idea") {
                xPoint = -Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 220;
                itemY = 70 + this.state.counter[11] * lineSep;
                this.state.counter[11]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "production") {
                xPoint = -Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 20;
                itemY = 520 + this.state.counter[12] * lineSep;
                this.state.counter[12]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "validation") {
                xPoint = -Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 20;
                itemY = 370 + this.state.counter[13] * lineSep;
                this.state.counter[13]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "prototype") {
                xPoint = -Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 20;
                itemY = 220 + this.state.counter[14] * lineSep;
                this.state.counter[14]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "idea") {
                xPoint = -Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
                itemX = 20;
                itemY = 70 + this.state.counter[15] * lineSep;
                this.state.counter[15]++;
                description = d[this.state.Var5];
                this.state.itemId++;
            }
            if(d[this.state.Var3] === "Natural Language Processing"){
                color = "red";
            } else if(d[this.state.Var3] === "Machine Learning"){
                color = "blue";
            } else if(d[this.state.Var3] === "Drones"){
                color = "green";
            } else if(d[this.state.Var3] === "Blockchain"){
                color = "orange";
            } else if(d[this.state.Var3] === "Artificial Intelligence"){
                color = "yellow";
            } else if(d[this.state.Var3] === "Social Media"){
                color = "purple";
            }
            return {
                x: xPoint,
                y: yPoint,
                color: color,
                item: title,
                itemX: itemX,
                itemY: itemY,
                description:description,
                itemId: "t" + this.state.itemId
            };
        });

        var circleTooltip = d3.select("#second")
            .append("div")
            .style("opacity", 1)
            .style("position", "absolute")
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")

        var mouseoverCircle = function(d) {
            circleTooltip
                .style("opacity", 1)
        }
        var mousemoveCircle = function(d) {
            circleTooltip
                .html(d.item)
                .style("left", (d3.mouse(this)[0])+centerX + "px")
                .style("top", (d3.mouse(this)[1])+centerY + "px")
        }
        var mouseleaveCircle = function(d) {
            circleTooltip
                .style("opacity", 0)
        }

        let items = d3.select(this.itemArea).selectAll('text').data(allData);

        items.enter().append('text')
            .attr( 'x', (d) => d.itemX)
            .attr( 'y', (d) => d.itemY)
            .attr("id", (d) => d.itemId)
            .text(function (d) {return d.item})
            .on("click", function (d){d3.select(this).text(d.description)})

        let circles = d3.select(this.circleArea).selectAll('circle').data(allData);

        circles.enter().append('circle')
            .attr('r', 7)
            .attr('fill', (d) => d.color)
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .on("mouseover", mouseoverCircle)
            .on("mousemove", mousemoveCircle)
            .on("mouseleave", mouseleaveCircle)
            .on("click", function (d){ d3.select("#third").select("#"+d.itemId).text(d.description)})

    }

    render() {
        this.updatePoints()
        return (
            <div className="container">
                <div id="first">
                    <svg width={300} height={600}>
                        <g transform={`translate(0,0)`}>
                            <text x={10} y={50} fontSize={"2em"} stroke={"black"} >Technologies</text>
                            <circle cx={30} cy={80} r={20} stroke={"black"} fill={"red"} />
                            <circle cx={30} cy={130} r={20} stroke={"black"} fill={"blue"} />
                            <circle cx={30} cy={180} r={20} stroke={"black"} fill={"green"} />
                            <circle cx={30} cy={230} r={20} stroke={"black"} fill={"orange"} />
                            <circle cx={30} cy={280} r={20} stroke={"black"} fill={"yellow"} />
                            <circle cx={30} cy={330} r={20} stroke={"black"} fill={"purple"} />
                        </g>
                        <g id="g1" transform={`translate(0,0)`}>
                            <rect x={70} y={60} width={200} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={85} fontSize={"1em"} stroke={"black"} >Natural Language Processing</text>
                        </g>
                        <g id="g2" transform={`translate(0,0)`}>
                            <rect x={70} y={110} width={130} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={135} fontSize={"1em"} stroke={"black"} >Machine Learning</text>
                        </g>
                        <g id="g3" transform={`translate(0,0)`}>
                            <rect x={70} y={160} width={60} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={185} fontSize={"1em"} stroke={"black"} >Drones</text>
                        </g>
                        <g id="g4" transform={`translate(0,0)`}>
                            <rect x={70} y={210} width={90} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={235} fontSize={"1em"} stroke={"black"} >Blockchain</text>
                        </g>
                        <g id="g5" transform={`translate(0,0)`}>
                            <rect x={70} y={260} width={150} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={285} fontSize={"1em"} stroke={"black"} >Artificial Intelligence</text>
                        </g>
                        <g id="g6" transform={`translate(0,0)`}>
                            <rect x={70} y={310} width={100} height={40} fill={"white"} strokeWidth={1} stroke={"black"} />
                            <text x={75} y={335} fontSize={"1em"} stroke={"black"} >Social Media</text>
                        </g>
                    </svg>
                </div>
                <div id="second">
                    <svg width={width} height={height}>
                        <g transform={`translate(${centerX},${centerY})`}>
                            <path d={firstOuterArc()}/>
                            <path d={firstMiddleOutArc()}/>
                            <path d={firstMiddleInArc()}/>
                            <path d={firstInnerArc()}/>
                            <line x2={outerRadarLine} y2={0} stroke={"black"}/>
                            <line x2={0} y2={-outerRadarLine} stroke={"black"}/>
                            <text x={outerRadarLine-50} y={-outerRadarLine+50} stroke={"black"}>Response</text>
                        </g>
                        <g transform={`translate(${centerX},${centerY})`}>
                            <path d={secondOuterArc()}/>
                            <path d={secondMiddleOutArc()}/>
                            <path d={secondMiddleInArc()}/>
                            <path d={secondInnerArc()}/>
                            <line x2={outerRadarLine} y2={0} stroke={"black"}/>
                            <line x2={0} y2={outerRadarLine} stroke={"black"}/>
                            <text x={outerRadarLine-50} y={outerRadarLine-50} stroke={"black"}>Recovery</text>
                        </g>
                        <g transform={`translate(${centerX},${centerY})`}>
                            <path d={thirdOuterArc()}/>
                            <path d={thirdMiddleOutArc()}/>
                            <path d={thirdMiddleInArc()}/>
                            <path d={thirdInnerArc()}/>
                            <line x2={0} y2={outerRadarLine} stroke={"black"}/>
                            <line x2={-outerRadarLine} y2={0} stroke={"black"}/>
                            <text x={-outerRadarLine} y={outerRadarLine-50} stroke={"black"}>Resilience</text>
                        </g>
                        <g transform={`translate(${centerX},${centerY})`}>
                            <path d={fourthOuterArc()}/>
                            <path d={fourthMiddleOutArc()}/>
                            <path d={fourthMiddleInArc()}/>
                            <path d={fourthInnerArc()}/>
                            <line x2={-outerRadarLine} y2={0} stroke={"black"}/>
                            <line x2={0} y2={-outerRadarLine} stroke={"black"}/>
                            <text x={-outerRadarLine} y={-outerRadarLine+50} stroke={"black"}>Preparedness</text>
                        </g>
                        <g transform={`translate(${centerX},${centerY})`}>
                            <text x={10} stroke={"black"} fontSize={"12px"}>Production</text>
                            <text x={innerRadarLine+10} stroke={"black"} fontSize={"12px"}>Validation</text>
                            <text x={middleInRadarLine+10} stroke={"black"} fontSize={"12px"}>Prototype</text>
                            <text x={middleOutRadarLine+10} stroke={"black"} fontSize={"12px"}>Idea</text>
                        </g>
                        <g transform={`translate(${centerX},0)`}>
                            <text y={40} stroke={"black"} fontSize={"2em"} textAnchor={"middle"}>{title}</text>
                        </g>
                        <g id="circleGroup" ref={(node) => { this.circleArea = node; }}
                           transform={`translate(${centerX}, ${centerY})`} />
                    </svg>
                </div>
                <div id="third">
                    <svg width={500} height={600}>
                        <text x={20} y={30} stroke={"black"} fontSize={"15px"}>Preparedness</text>
                        <text x={120} y={30} stroke={"black"} fontSize={"15px"}>Response</text>
                        <text x={220} y={30} stroke={"black"} fontSize={"15px"}>Resilience</text>
                        <text x={320} y={30} stroke={"black"} fontSize={"15px"}>Recovery</text>
                        <text x={20} y={50} stroke={"black"} fontSize={"15px"}>Idea</text>
                        <text x={120} y={50} stroke={"black"} fontSize={"15px"}>Idea</text>
                        <text x={220} y={50} stroke={"black"} fontSize={"15px"}>Idea</text>
                        <text x={320} y={50} stroke={"black"} fontSize={"15px"}>Idea</text>
                        <text x={20} y={200} stroke={"black"} fontSize={"15px"}>Prototype</text>
                        <text x={120} y={200} stroke={"black"} fontSize={"15px"}>Prototype</text>
                        <text x={220} y={200} stroke={"black"} fontSize={"15px"}>Prototype</text>
                        <text x={320} y={200} stroke={"black"} fontSize={"15px"}>Prototype</text>
                        <text x={20} y={350} stroke={"black"} fontSize={"15px"}>Validation</text>
                        <text x={120} y={350} stroke={"black"} fontSize={"15px"}>Validation</text>
                        <text x={220} y={350} stroke={"black"} fontSize={"15px"}>Validation</text>
                        <text x={320} y={350} stroke={"black"} fontSize={"15px"}>Validation</text>
                        <text x={20} y={500} stroke={"black"} fontSize={"15px"}>Production</text>
                        <text x={120} y={500} stroke={"black"} fontSize={"15px"}>Production</text>
                        <text x={220} y={500} stroke={"black"} fontSize={"15px"}>Production</text>
                        <text x={320} y={500} stroke={"black"} fontSize={"15px"}>Production</text>
                        <g id={"itemGroup"} ref={(node) => { this.itemArea = node; }}
                           transform={`translate(0,0)`} />
                    </svg>
                </div>
            </div>

        )
    }
}

// Render application
ReactDOM.render(
    <App />,
    document.getElementById('root')
);