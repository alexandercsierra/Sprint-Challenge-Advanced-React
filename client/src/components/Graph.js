import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";


class Graph extends React.Component {
  render() {
    console.log("players from graph", this.props.players);
    const countryObj = {USA: 0, Brazil: 0, Netherlands: 0, France: 0, Italy: 0}
    const countries = this.props.players.map(player => {
        if (player.country==="United States"){
            countryObj.USA +=1;
        } else if (player.country==="Brazil"){
            countryObj.Brazil +=1;
        } else if (player.country==="Netherlands"){
            countryObj.Netherlands +=1;
        } else if (player.country==="France"){
            countryObj.France +=1;
        } else if (player.country==="Italy"){
            countryObj.Italy +=1;
        }
    });
    console.log("countries", countryObj);
    

    const data = [
        ["Year", "Number of Players", { role: "style" }],
        ["USA", countryObj.USA, "color: gray"],
        ["Brazil", countryObj.Brazil, "color: #76A7FA"],
        ["Netherlands", countryObj.Netherlands, "color: blue"],
        ["France", countryObj.France, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
        [
          "Italy",
          countryObj.Italy,
          "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
        ]
      ];
      
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
  }
}

export default Graph