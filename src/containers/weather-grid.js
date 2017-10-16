import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google-map";

class WeatherGrid extends Component {
    renderRow(weather) {
        const temperatures = weather.list.map( weather => weather.main.temp);
        const tempsInCelcius = temperatures.map( temp => temp - 273);
        const pressures = weather.list.map( weather => weather.main.pressure);
        const humidities = weather.list.map( weather => weather.main.humidity);
        const labelsAsDayHour = weather.list.map( weather => {
            const date = new Date(weather.dt_txt);
            return date.getHours() + "h";
        })
        const { lon, lat } = weather.city.coord;

        return (
            <tr key={weather.city.id}>
                <td className="gmap-cell">
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart 
                        labels={labelsAsDayHour} 
                        title="Temperatures" 
                        data={tempsInCelcius} 
                        color="green">
                    </Chart>
                </td>
                <td>
                    <Chart 
                        labels={labelsAsDayHour} 
                        title="Pressures" 
                        data={pressures} 
                        color="orange">
                    </Chart>
                </td>
                <td>
                    <Chart 
                        labels={labelsAsDayHour} 
                        title="Humidities" 
                        data={humidities} 
                        color="blue">
                    </Chart>
                </td>
            </tr>
        );
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderRow)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps( state ) {
    return { weather: state.weather }
}

export default connect(mapStateToProps) (WeatherGrid)