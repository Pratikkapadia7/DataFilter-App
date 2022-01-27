import React, { useState } from 'react';
import TableData from "./components/TableData";
import './table.css';
import TableFilter from "./components/TableFilter";
import TableFilterValue from './components/TableFilterValue';
const data = [
  {
    "id": 100,
    "firstName": "Matt",
    "lastName": "Spencer",
    "dateOfBirth": "10/26/1980",
    "creditScore": 721,
    "maritalStatus": "married",
    "w2Income": 61968,
    "emailAddress": "Matt.Spencer@gmail.com",
    "homePhone": "353-901-1738",
    "cellPhone": "323.685.2462",
    "currentAddress": "969 Schultz Valley",
    "employer": "Gleason - Schmidt",
    "title": "District Branding Coordinator",
    "startDate": "4/8/2018",
    "subjectPropertyAddress": "938 Jules Gateway"
  },
  {
    "id": 200,
    "firstName": "Keanu",
    "lastName": "Grant",
    "dateOfBirth": "11/27/1968",
    "creditScore": 657,
    "maritalStatus": "separated",
    "w2Income": 118632,
    "emailAddress": "Keanu_Grant@yahoo.com",
    "homePhone": "1-846-897-9685",
    "cellPhone": "781.536.9402 x2224",
    "currentAddress": "003 Keeling Fields",
    "employer": "Effertz, Lesch and Mayert",
    "title": "Chief Data Officer",
    "startDate": "6/24/2020",
    "subjectPropertyAddress": "600 Pedro Pines"
  },
  {
    "id": 300,
    "firstName": "Alysson",
    "lastName": "Mueller",
    "dateOfBirth": "12/11/1966",
    "creditScore": 860,
    "maritalStatus": "separated",
    "w2Income": 110367,
    "emailAddress": "Alysson_Mueller83@gmail.com",
    "homePhone": "603.944.9255 x2371",
    "cellPhone": "397.482.4352 x609",
    "currentAddress": "9419 Ernestine Forest",
    "employer": "Gaylord, VonRueden and Abshire",
    "title": "Dynamic Operations Executive",
    "startDate": "6/25/2017",
    "subjectPropertyAddress": "2242 Buckridge Mill"
  },
  {
    "id": 400,
    "firstName": "Daphne",
    "lastName": "Upton",
    "dateOfBirth": "2/3/1984",
    "creditScore": 564,
    "maritalStatus": "married",
    "w2Income": 95198,
    "emailAddress": "Daphne.Upton16@yahoo.com",
    "homePhone": "366-563-1505 x97378",
    "cellPhone": "(996) 702-6819 x7657",
    "currentAddress": "4189 Hermiston Glens",
    "employer": "Schowalter LLC",
    "title": "International Brand Facilitator",
    "startDate": "3/26/2017",
    "subjectPropertyAddress": "4245 Brando Junction"
  },
  {
    "id": 500,
    "firstName": "Lance",
    "lastName": "Hilpert",
    "dateOfBirth": "8/14/1982",
    "creditScore": 643,
    "maritalStatus": "married",
    "w2Income": 109430,
    "emailAddress": "Lance.Hilpert@gmail.com",
    "homePhone": "717-491-2647 x2663",
    "cellPhone": "286.526.1661 x80547",
    "currentAddress": "6262 Kevon Terrace",
    "employer": "Jerde Group",
    "title": "Corporate Integration Facilitator",
    "startDate": "3/8/2017",
    "subjectPropertyAddress": "66003 Murazik Locks"
  }
]

const dataFilter =[
  {
    id: 'id',
    filterValue: ['Greater than', 'Less than']
  },
  {
    id: 'firstName',
    filterValue: ['Content', 'Start of']
  },
  {
    id: 'creditScore',
    filterValue: ['Greater than', 'Less than']
  },
];

function App() {
  const [updatedata, setUpdateData]= useState(data);
  const [attributeValue, setAttributeValue] = useState('id');
  const [filterValue, setFilterValue]= useState('Greater than');
  const [inputValue, setInputValue]= useState('');
  const setDataChange =(dataValue)=>{
    setAttributeValue(dataValue);
  }
  const filterChangeHandler =(data)=>{
    setFilterValue(data)
  }
  const inputChangeHandler =(data =>{
    setInputValue(data);
  })
  let updatedData=[];
  dataFilter.forEach(element => {
    if(inputValue !== ""){
      if(element.id === attributeValue){
        if(element.filterValue[0]=== filterValue){
         //  || element.filterValue[1]=== filterValue){
           data.forEach(element => {
             if(element[attributeValue]> inputValue){
               updatedData.push(element);
               setUpdateData(updatedData);
             }
           });
        }
       }
    }
  });

  return (
    <div>
      <TableFilter items ={dataFilter} onChangeHandler = {setDataChange}></TableFilter>
      <TableFilterValue 
        items ={dataFilter} 
        atrValue = {attributeValue} 
        onFilterChange={filterChangeHandler} 
        onInputChange ={inputChangeHandler} >
      </TableFilterValue>
      <table className="table-main">
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Credit Score</th>
        </tr>
      </table>
      {updatedata.map((user) => (
        <TableData items={user}></TableData>
      ))}
    </div>
    
  );
}

export default App;
