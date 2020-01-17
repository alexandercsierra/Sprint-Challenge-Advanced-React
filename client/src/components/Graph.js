import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";


const Graph = (props) => {




    console.log("players from graph", props.players);
    const countryObj = {USA: 0, Brazil: 0, Netherlands: 0, France: 0, Italy: 0}
    const countries = props.players.map(player => {
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
        ["USA", countryObj.USA, "color: #ed1e14"],
        ["Brazil", countryObj.Brazil, "color: #009b3a"],
        ["Netherlands", countryObj.Netherlands, "color: #0249ce"],
        ["France", countryObj.France, "stroke-color: #ed2939; stroke-width: 4; fill-color: #002395"],
        [
          "Italy",
          countryObj.Italy,
          "stroke-color: #009247; stroke-width: 4; fill-color: #e00024;"
        ]
      ];
      
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
}

export default Graph