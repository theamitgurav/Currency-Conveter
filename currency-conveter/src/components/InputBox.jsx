import { useState, useId } from "react";

function InputBox({
    label,
    amount,
    selectCurrency,
    currencyoptions=[],
    onCurrencyChange,
    onAmountChange
    


}){
    const amountId = useId();
    return(
        <div className="w-full rounded-xl flex bg-slate-200">
            <div className="w-full text-center">
            <label htmlFor={amountId}
            className="line-block text-xl  ">{label}</label>
           
            
            <input type="number" className=" w-full outline-none rounded-md text-center text-xl bg-slate-100 bg-transparent px-4 py-3 mt-2 mb-2 ml-2"
            placeholder="Amount"
            value={amount} 
            onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-center text-center">
                <p className="mb-1 w-full text-xl">Currency Type</p>
                <select className="rounded-lg px-3 py-3 outline-none bg-gray-100 cursor-pointer mb-2"
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyoptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox;