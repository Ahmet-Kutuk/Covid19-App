import React, {useContext,useEffect,useState} from 'react'
import Chart from 'react-apexcharts';
import {dayOneAllStatus} from '../Api/Api';
import {countryContext} from '../Context/context';
export default function ChartBox() {
    const {country} = useContext(countryContext);
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
      const fetchdata = async () => {
          const data = await dayOneAllStatus(country);
          setDailyData(data);            
      };  
      fetchdata();
      console.log(dailyData);
      
  },[country])
  const colors =['#fff','#7E36AF','#D9534F']
  const options = {
    chart: {
        height: 350,
        type: 'area'
      },
      theme: {
        palette: 'palette8' // upto palette10
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: dailyData.map(item => item.Date)
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy'
        },
      },
};
const series = [
    {
        name: 'Vaka',
        data: dailyData.map(item => item.Confirmed)
      }, {
        name: 'İyileşen',
        data: dailyData.map(item => item.Recovered)
      },
      {
        name: 'Ölüm',
        data: dailyData.map(item => item.Deaths)
      }
];

  
  
   
   
    return (
          
      <div id="chart">
   
      <Chart options={options} series={series} style={{marginTop:200}} colors={colors} type="area" height={350} />
    </div>
        
    )
}
