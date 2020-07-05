import axios from 'axios';
const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
    let changeUrl = url;
    if(country){
        changeUrl = `${url}/countries/${country}`
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeUrl)
        return {
            confirmed,recovered,deaths,lastUpdate
        }
    }catch(e){
        console.log(e)
    }
}

export const fetchDailyData = async() =>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        
        const modifyData= data.map((dailydata) => ({
         confirmed : dailydata.confirmed.total,
         deaths : dailydata.deaths.total,
         date : dailydata.reportDate
        }))

        return modifyData
    }catch(e){
        console.log(e)
    }
}
export const fetchCountries = async() =>{
    try{
        const {data : {countries}} = await axios.get(`${url}/countries`)
        const modifyData = countries.map(({name}) => name)
        return modifyData   
    }catch(e){
        console.log(e)
    }
}
