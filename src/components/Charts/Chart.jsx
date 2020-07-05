import React,{useState,useEffect} from 'react';
import {Line,Bar,Pie,Doughnut} from 'react-chartjs-2'
import {fetchDailyData} from '../../api'
import style from './Chart.module.css'

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData1,setDailyData1] = useState('')
    useEffect(() => {
        const data = async() => {
            const dailydata = await fetchDailyData()   
            setDailyData1(dailydata)
        }
        data()
    }, [])

    const LineChartData = (
        dailyData1.length !== 0 ?
       ( <Line 
            data={{
                labels: dailyData1.map( ({date}) => date ),
                datasets:[{
                    data:dailyData1.map(({confirmed}) => confirmed ),
                    label:'Infected',
                    borderColor:'blue',
                    backgroundColor: 'rgba(0,0,255,0.5)',
                    fill:true
                },{
                    data:dailyData1.map(({deaths}) => deaths ),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill:true
                }]
            }}
        />):
       null
    )
    const barChartData = (
        confirmed ?
        <Bar 
            data={{
                labels:['Infected','Recoverd','Deaths'],
                datasets:[{
                    label:['People'],
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:true},
                title:{ display:true ,text:`Current country is ${country}` }
            }}
        />:
        null
    )        
    const PieChartData = (
        confirmed?
        <Pie 
            data={{
                labels:['Infected','Recoverd','Deaths'],
                datasets:[{
                    labels:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }],
               
            }}
            options={{
                legend:{
                    display:true,
                    position:'right'
                  },
                title:{ display:true ,text:`Current country is ${country}` }
            }}
        /> :
        null
    ) 
    const doughnutChartData = (
        confirmed?
        <Doughnut 
            data={{
                labels:['Infected','Recoverd','Deaths'],
                datasets:[{
                    labels:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }],
               
            }}
            options={{
                legend:{
                    display:true,
                    position:'right'
                  },
                title:{ display:true ,text:`Current country is ${country}` }
            }}
        /> :
        null   
    )
    return (
        <div className={style.container}>
            {country ?<> 
            <h1>Bar Chart</h1>
            {barChartData}
            <h1>Pie Chart</h1>
            {PieChartData}
            <h1>Doughnut Chart</h1>
            {doughnutChartData}
            </>: LineChartData}       
        </div>
    )
}
export default Chart