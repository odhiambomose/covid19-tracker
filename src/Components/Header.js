import React, {useState,useEffect} from "react";
import CardItem from "./CardItem"
import  styled  from "styled-components";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import CountrySelect from "./CountrySelect";

const Select=styled.div`
display:flex;
justify-content:center;
`

const Container=styled.div``
const HeaderTitle=styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Logo=styled.div``

const Title=styled.h1`
font-family:'Rubik Beastly', cursive;
font-size:4rem;
font-weight:100;
`
const CovidSpan = styled.span`
color:green;
`

const TrackerSpan = styled.span`
color:red;
`
const Summary=styled.div`
display:flex;
justify-content:center;
text-align:center;
gap:3em;

`
const Header=()=>{


    const [ selectedCountry,setSelectedCountry]=useState("")
    const[summary,setSummary]=useState({})
    const[singleCountry,setSingleCountry]=useState({})
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetchCountries();
        fetchSummary();
        
        
    },[] )

    
    




  
        
    



const fetchCountries=()=>{
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.covid19api.com/countries", requestOptions)
        .then(response => response.json())
        .then(result =>setCountries(result))
        .catch(error => console.log('error', error));
}

const fetchSummary=()=>{
  let   requestOptions={
    method: 'GET',
        redirect: 'follow'
    };
    fetch("https://api.covid19api.com/summary",requestOptions)
    .then(response => response.json())
    .then(result =>setSummary(result))
    .catch(error => console.log('error', error));

    


}

const countrySummary=(countryItem)=>{
if(Object.keys(summary).length != 0){
   const filteredCountry = summary.Countries.filter(country=>country.Country===countryItem)
   


   console.log(filteredCountry)

}

}






    return(
        <Container>
            <HeaderTitle>

<Logo>
<CoronavirusTwoToneIcon style={{fontSize:"5rem",color:"red"}}  />
</Logo>
{countrySummary(selectedCountry)}
<Title>

<CovidSpan>Covid-19</CovidSpan> <TrackerSpan>Tracker</TrackerSpan>
</Title>
</HeaderTitle>
<Select>
<CountrySelect setSelectedCountry={setSelectedCountry} countries={countries}/>
</Select>
<Summary>
<CardItem  title={singleCountry.TotalConfirmed} cases="NewCases" update="200,000" color="red" type="New cases"/>
<CardItem title="500,000" cases="Recovered" update="700" color="green" type="Recovered"/>
<CardItem title="500,000" cases="ConfirmedDeaths" update="200" color="grey" type="Deaths"/>
</Summary>
{console.log(selectedCountry)}

        </Container>
    )
}
export default Header