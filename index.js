React = React && React.hasOwnProperty('default') ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

const width = window.innerWidth;
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

const Radar = () => (
    React.createElement( 'svg', { width: width, height: height },
        React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
            React.createElement( 'path', { d: firstOuterArc() }),
            React.createElement( 'path', { d: firstMiddleOutArc() }),
            React.createElement( 'path', { d: firstMiddleInArc() }),
            React.createElement( 'path', { d: firstInnerArc() }),
            React.createElement( 'line', {x2:outerRadarLine , y2:0, stroke:"black"}),
            React.createElement( 'line', {x2:0 , y2:-outerRadarLine, stroke:"black"}),
            React.createElement( 'text', {x:outerRadarLine-50 , y:-outerRadarLine+50, stroke:"black"},"Response"),
        ),
        React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
            React.createElement( 'path', { d: secondOuterArc() }),
            React.createElement( 'path', { d: secondMiddleOutArc() }),
            React.createElement( 'path', { d: secondMiddleInArc() }),
            React.createElement( 'path', { d: secondInnerArc() }),
            React.createElement( 'line', {x2:outerRadarLine , y2:0, stroke:"black"}),
            React.createElement( 'line', {x2:0 , y2:outerRadarLine, stroke:"black"}),
            React.createElement( 'text', {x:outerRadarLine-50 , y:outerRadarLine-50, stroke:"black"},"Recovery"),
        ),
        React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
            React.createElement( 'path', { d: thirdOuterArc() }),
            React.createElement( 'path', { d: thirdMiddleOutArc() }),
            React.createElement( 'path', { d: thirdMiddleInArc() }),
            React.createElement( 'path', { d: thirdInnerArc() }),
            React.createElement( 'line', {x2:0 , y2:outerRadarLine, stroke:"black"}),
            React.createElement( 'line', {x2:-outerRadarLine , y2:0, stroke:"black"}),
            React.createElement( 'text', {x:-outerRadarLine , y:outerRadarLine-50, stroke:"black"},"Resilience"),
        ),
        React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
            React.createElement( 'path', { d: fourthOuterArc() }),
            React.createElement( 'path', { d: fourthMiddleOutArc() }),
            React.createElement( 'path', { d: fourthMiddleInArc() }),
            React.createElement( 'path', { d: fourthInnerArc() }),
            React.createElement( 'line', {x2:-outerRadarLine , y2:0, stroke:"black"}),
            React.createElement( 'line', {x2:0 , y2:-outerRadarLine, stroke:"black"}),
            React.createElement( 'text', {x:-outerRadarLine , y:-outerRadarLine+50, stroke:"black"},"Preparedness"),
        ),
        React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
            React.createElement( 'text', {x:10, stroke:"black", fontSize:"12px"},"Production"),
            React.createElement( 'text', {x:innerRadarLine+10, stroke:"black", fontSize:"12px"},"Validation"),
            React.createElement( 'text', {x:middleInRadarLine+10, stroke:"black", fontSize:"12px"},"Prototype"),
            React.createElement( 'text', {x:middleOutRadarLine+10, stroke:"black", fontSize:"12px"},"Idea"),
        ),
        React.createElement( 'g', { transform: `translate(${centerX},0)` },
        React.createElement( 'text', {y:40, stroke:"black", fontSize:"2em", textAnchor:"middle"},title),)
    )
);

ReactDOM.render(React.createElement( Radar, null ), document.getElementById('root'));