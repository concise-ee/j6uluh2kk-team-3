import React, { useState } from 'react';

const Anti = () => {
    
    const [haba, setHaba] = useState('');
    
    const submitNumber = async (event) => {
        let num = event.target.num.value;
        let randIdx = event.target.num.value;
        while (randIdx === event.target.num.value) {
            randIdx = Math.floor(Math.random() * 10) + 1;
        }
        
        event.preventDefault();
        
        setHaba('WRONG :( You guessed ' + num + ' but right answer was ' + randIdx);
    };
    
    return (
        <div style={{
            textAlign: 'center',
            height: '100%',
            backgroundColor: 'pink',
        }}>
            <div style={{
                textAlign: 'center',
                padding: 25,
                color: 'blue',
                animation: 'blinker 0.1s cubic-bezier(.5, 0, 1, 1) infinite alternate',
                fontSize: 'xxx-large'
            }}><strong>WIN 1000€ IN CASH NOW!!</strong></div>
            <div style={{
                padding: 10
            }}>Transfer 1€ to <strong>EE1220384351625147367298</strong> and try your luck!
            </div>
            <div style={{
                padding: 10
            }}>Guess random number from 1-10 to win:
            </div>
            <div>
                <form className="flex flex-col" onSubmit={submitNumber}>
                    
                    <input className="mb-2 border-b-2" id="num" type="number" step="any" min="1" max="10" required
                           style={{
                               textAlign: 'center',
                               fontSize: 'xxx-large',
                               width: 100
                           }}/>
                    <br/>
                    <button type="submit"
                            className="px-4 py-2 font-bold text-black bg-blue-100 rounded-full hover:bg-blue-700">GUESS
                    </button>
                </form>
            </div>
            <div style={{
                textAlign: 'center',
                padding: 25,
                color: 'red',
                animation: 'blinker 0.1s cubic-bezier(.5, 0, 1, 1) infinite alternate',
                fontSize: 'xxx-large'
            }}>
                {haba}
            </div>
        </div>
    
    );
};

export default Anti;
