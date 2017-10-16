import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

export default (props) => {
    var backgroundColor = new Color(props.color)
    backgroundColor.alpha(0.6)

    const datasource = {
        labels: props.labels,
        datasets: [
        {
            label: props.title,
            fill: true,
            lineTension: 0.2,
            backgroundColor: backgroundColor.rgbaString(),
            borderColor: props.color,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#EFF',
            pointBorderWidth: 0.1,
            //pointHoverRadius: 1,
            //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            //pointHoverBorderColor: 'rgba(220,220,220,1)',
            //pointHoverBorderWidth: 1,
            pointRadius: 2,
            pointHitRadius: 10,
            data: props.data
        }]
      };


    return (
        <div>
            <Line data={datasource} />           
        </div>
    );
}