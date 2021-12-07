import React from 'react'

const Anti = () => {
    const submitNumber = async (event) => {
        let randIdx = event.target.num.value
        while (randIdx ===event.target.num.value)  {
            randIdx = Math.floor(Math.random() * 10)+1
        }
        
        event.preventDefault();
        alert(`WRONG :( You guessed ${event.target.num.value} but right answer was ${randIdx}!`);
    };
    
    return (
        <div>
            <p>WIN 1000€ IN CASH NOW!!</p>
            
            <p>Guess random number from 1-10 to win:</p>
    
            <form className='flex flex-col' onSubmit={submitNumber}>
                <input className='mb-4 border-b-2' id='num' type='text' required />
                <br/>
                <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>GUESS</button>
            </form>
        </div>
        
    )
}

export default Anti
