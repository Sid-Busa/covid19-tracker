import React, { useEffect,useState } from 'react';
import {fetchCountries} from '../../api';
import {FormControl,NativeSelect,Grid} from '@material-ui/core'
import style from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [allCountries,setAllCountries] = useState([])
    useEffect(() =>{
        const getCountries = async() =>{
            const countries = await fetchCountries()
            setAllCountries(countries)
        }
        getCountries()
    },[allCountries])

    return (
        <Grid container className={style.formControl} >           
            <FormControl style={{width:'50%'}} >
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {allCountries.map((name,i) => (
                        <option key={i} value={name}>{name}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Grid>    
    )
}
export default CountryPicker
