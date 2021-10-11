import React, { memo, useState } from 'react'
import Chart from 'react-apexcharts'
export default memo(function Djradio() {
    const [state] = useState({
          
        series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          },
        },
      
      
      })
    return (
        // <div id="chart">
            <Chart options={state.options} series={state.series} type="area" height={350} />
        // </div>
    )
})
// import React, { PureComponent } from 'react'
// import Chart from 'react-apexcharts'
// export default class Index extends PureComponent {
//     state = {
//         series: [{
//             name: 'series1',
//             data: [31, 40, 28, 51, 42, 109, 100]
//           }, {
//             name: 'series2',
//             data: [11, 32, 45, 32, 34, 52, 41]
//           }],
//           options: {
//             chart: {
//               height: 350,
//               type: 'area'
//             },
//             dataLabels: {
//               enabled: false
//             },
//             stroke: {
//               curve: 'smooth'
//             },
//             xaxis: {
//               type: 'datetime',
//               categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//             },
//             tooltip: {
//               x: {
//                 format: 'dd/MM/yy HH:mm'
//               },
//             },
//           },
//     }
//     render() {
//         return (
//             // <div id="chart">
//                 <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
//             // </div>
//         )
//     }
// }
