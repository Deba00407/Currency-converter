import { useState } from 'react'
import { InputBox } from "./components"
import useCurrencyInfo from "./customHooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState()
  const [convertedAmt, setConvertedAmt] = useState()
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const currencyInfo = useCurrencyInfo(from)
  let options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1718062455469-550f7f6026fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectedCurr={from}
                  onAmountchange={(amount)=> setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmt}
                  currOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurr={to}
                  onAmountchange={() => convert()}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
