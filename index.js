const width = window.innerWidth-600;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const lineThickness = 1;
const outerRadarLine = 240;
const middleOutRadarLine = 180;
const middleInRadarLine = 120;
const innerRadarLine = 60;
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
            let color = "black"
            if (d[this.state.Var1] === "response" && d[this.state.Var2] === "production") {
                xPoint = Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = -Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2));
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "validation") {
                xPoint = Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "prototype") {
                xPoint = Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "response" && d[this.state.Var2] === "idea") {
                xPoint = Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(-Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "production") {
                xPoint = Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "validation") {
                xPoint = Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "prototype") {
                xPoint = Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "recovery" && d[this.state.Var2] === "idea") {
                xPoint = Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "production") {
                xPoint = -Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "validation") {
                xPoint = -Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "prototype") {
                xPoint = -Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "resilience" && d[this.state.Var2] === "idea") {
                xPoint = -Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "production") {
                xPoint = -Math.floor(Math.random() * (innerRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(innerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "validation") {
                xPoint = -Math.floor(Math.random() * (middleInRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(middleInRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "prototype") {
                xPoint = -Math.floor(Math.random() * (middleOutRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(middleOutRadarLine - 30, 2) - Math.pow(xPoint, 2)));
            }else if (d[this.state.Var1] === "preparedness" && d[this.state.Var2] === "idea") {
                xPoint = -Math.floor(Math.random() * (outerRadarLine-30));
                yPoint = -Math.floor(Math.sqrt(Math.pow(outerRadarLine - 30, 2) - Math.pow(xPoint, 2)));
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
                color: color
            };
        });

        let circles = d3.select(this.chartArea).selectAll('circle').data(allData);

        circles.enter().append('circle')
            .attr('r', (d) => 5)
            .attr('fill', (d) => d.color)
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y);
    }

    render() {
        this.updatePoints()

        return (
            <div className="container">
                <div  id="first">
                    <svg width={300} height={500}>
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
                        <g ref={(node) => { this.chartArea = node; }}
                           transform={`translate(${centerX}, ${centerY})`} />
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