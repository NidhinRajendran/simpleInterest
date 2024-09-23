import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [pAmount, setPamount] = useState('')
  const [rate, setrate] = useState('')
  const [year,setyear] = useState('')
  const [interest,setinterest] = useState(0)
  const [ispAmount, setisPamount] = useState(true)
  const [israte, setisrate] = useState(true)
  const [isyear,setisyear] = useState(true)
  const validate = (e) =>{
    console.log(e.target.name);
    console.log(!!e.target.value.match('^[0-9]*$'))
    if(!!e.target.value.match('^[0-9]*$'))
    {
      if(e.target.name=='principal')
      {
        setPamount(e.target.value)
        setisPamount(true)
        
      }
      else if(e.target.name=='rate')
      {
        setrate(e.target.value)
        setisrate(true)
      }
      else
      {
        setyear(e.target.value)
        setisyear(true)
      }
    }

    else
    {
      if(e.target.name=='principal')
        {
          setPamount(e.target.value)
          setisPamount(false)
          
        }
        else if(e.target.name=='rate')
        {
          setrate(e.target.value)
          setisrate(false)
        }
        else
        {
          setyear(e.target.value)
          setisyear(false)
        }
    }
    
    
    
  }

  const handleReset = () =>{
    setPamount('')
    setrate('')
    setyear('')
    setinterest(0)
    setisPamount(true)
    setisrate(true)
    setisyear(true)
  }

  const calculate =()=>{
    
    setinterest((pAmount*rate*year)/100)
  }

  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-3"></div>
        <div className="col-md-6 border border-dark rounded my-5 shadow-lg bg-secondary-subtle">
          <h1 className='text-center mt-5'>Simple <span className='text-danger'>Interest</span> Calculator</h1>
          <p className='text-center'>Calculate your simple interest</p>
          <div style={{height:'150px'}} className='d-flex justify-content-center align-items-center flex-column bg-danger rounded mx-5 text-light mb-3'>
            <h1>{`₹ ${interest}`}</h1>
            <p> Simple Interest</p>
          
          </div>
          <div className='mb-3 d-flex justify-content-center align-items-center flex-column mx-5'>
            <TextField name='principal' id="outlined-basic" value={pAmount} label="₹ Principal Amount" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}} />
              {!ispAmount && <span className='text-danger'>*Invalid input</span>}
          </div>

          <div className='mb-3 d-flex justify-content-center align-items-center flex-column mx-5'>
            <TextField name='rate' id="outlined-basic" value={rate} label="% Interest Rate" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}} />
            {!israte && <span className='text-danger'>*Invalid input</span>}
          </div>

          <div className='mb-3 d-flex justify-content-center align-items-center flex-column mx-5'>
            <TextField name='years' id="outlined-basic" value={year} label="Years" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
            {!isyear && <span className='text-danger'>*Invalid input</span>}
          </div>
          <div className='d-flex justify-content-between mx-5 mb-3'>
          <Button variant="contained" color='error' onClick={calculate} disabled={ispAmount && israte && isyear ? false: true}>CALCULATE</Button>
          <Button variant="outlined" color='error' onClick={handleReset}>RESET</Button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
      
    </>
  )
}

export default App
