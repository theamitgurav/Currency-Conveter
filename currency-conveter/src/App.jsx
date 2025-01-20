import { useState } from 'react'
// import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyConveter'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount]= useState();

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  

  return (
    <div className='w-full h-screen flex flex-wrap justify-center bg-cover'
    style={{backgroundImage:`URL("https://images.unsplash.com/photo-1565373679107-344d38dbf734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
      <div className='w-full'>
        <div className='rounded-xl w-full max-w-2xl mx-auto border border-gray-60 p-10 backdrop-blur-sm my-96 bg-white/30 '>
          <form onSubmit={(e)=>{e.preventDefault();
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              currencyoptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency)=>setAmount(amount)}
              onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >swap</button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyoptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}/>
            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default App
