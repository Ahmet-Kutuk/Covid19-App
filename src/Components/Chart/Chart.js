import React, {useContext,useEffect,useState} from 'react'
import Chart from 'react-apexcharts';
import {dayOneAllStatus} from '../Api/Api';
import {countryContext} from '../Context/context';
export default function ChartBox() {
    const {country} = useContext(countryContext);
    const [dailyData,setDailyData] = useState([]);
    const [options,setOptions] = useState({
        chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy'
            },
          },
    });
    const [series,setSeries] = useState([
        {
            name: 'Vaka',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'İyileşen',
            data: [11, 32, 45, 32, 34, 52, 41]
          },
          {
            name: 'Ölüm',
            data: [15,25,35,45,55,65,75,85,95]
          }
    ]);
    useEffect(() => {
        const fetchdata = async () => {
            const data = await dayOneAllStatus(country);
            setDailyData(data);            
        };  
        fetchdata();
        
      
    },[country])

  
   
   
    return (
          
      <div id="chart">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
        
    )
}
