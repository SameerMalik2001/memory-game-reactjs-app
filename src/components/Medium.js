import React, { useState, useEffect } from 'react';
import i1 from '../Assets/Medium/img (1).jpg'
import i2 from '../Assets/Medium/img (2).jpg'
import i3 from '../Assets/Medium/img (3).jpg'
import i4 from '../Assets/Medium/img (4).jpg'
import i5 from '../Assets/Medium/img (5).jpg'
import i6 from '../Assets/Medium/img (6).jpg'

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

function Medium() {
    let data_1 = [
        { index: 1, id: 1, img: i1, solid: false, state: false },
        { index: 2, id: 2, img: i2, solid: false, state: false },
        { index: 3, id: 3, img: i3, solid: false, state: false },
        { index: 4, id: 4, img: i4, solid: false, state: false },
        { index: 5, id: 5, img: i5, solid: false, state: false },
        { index: 6, id: 6, img: i6, solid: false, state: false },
        { index: 7, id: 6, img: i6, solid: false, state: false },
        { index: 8, id: 5, img: i5, solid: false, state: false },
        { index: 9, id: 4, img: i4, solid: false, state: false },
        { index: 10, id: 3, img: i3, solid: false, state: false },
        { index: 11, id: 2, img: i2, solid: false, state: false },
        { index: 12, id: 1, img: i1, solid: false, state: false },
    ]
    shuffleArray(data_1)
    const [data, setData] = useState(data_1)
    const [prev, setPrev] = useState(null)
    const [time, setTime] = useState(false)
    const [startbtn, setStartbtn] = useState(true)
    const [resetbtn, setResetbtn] = useState(true)
    const [won, setWon] = useState(false)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)


    const clicked = (item) => {
        if (startTime === null) {
            setStartTime(performance.now())
        }
        if (!prev) {
            setPrev({ ...item, state: true })
            setData(data.map((a) => ((a.index === item.index) ? { ...a, state: true } : a)))
        } else {
            if (prev.id === item.id) {
                setData(data.map((a) => (((a.index === item.index) || (a.index === prev.index)) ? { ...a, solid: true, state: true } : a)))
                setPrev(null)
            } else {
                setData(data.map((a) => ((a.index === item.index) ? { ...a, solid: false, state: true } : a)))
                setTimeout(() => {
                    setData(data.map((a) => (((a.index === item.index) || (a.index === prev.index)) ? { ...a, solid: false, state: false } : a)))
                    setPrev(null)
                }, 500);

            }
        }
    }

    useEffect(() => {
        let c = 0
        for (let i = 0; i < 12; i++) {
            if (data[i].solid === true) {
                c = c + 1
            }
        }
        if (c === 12) {
            setWon(true)
            if (endTime === null) {
                setEndTime(performance.now())
            }
        }
    }, [data, endTime]);


    const start = () => {
        setTime(true)
        setTimeout(() => {
            setTime(false)
            setStartbtn(false)
        }, 2000);
    }

    const reset = () => {
        shuffleArray(data_1)
        setData(data_1)
        setPrev(null)
        setTime(false)
        setStartbtn(true)
        setResetbtn(true)
        setWon(false)
        setStartTime(null)
        setEndTime(null)
      }

    return (
        <div className='gap-5 mt-10 items-center flex flex-col w-[100%] '>
            <div className=' text-3xl text-orange-500'>
                Medium Level
            </div>
            <div className='flex flex-row gap-5'>
                {startbtn && <button className='rounded-2xl text-white text-xl  border-none w-20 h-7 bg-orange-500' onClick={() => start()} >Start</button>}
                {!startbtn && <button disabled={true} className='rounded-2xl text-white text-xl  border-none w-20 h-7 bg-orange-200'>Start</button>}
                {resetbtn && <button className='rounded-2xl text-white text-xl  border-none w-20 h-7 bg-orange-500' onClick={() => reset()} >Reset</button>}
                {!resetbtn && <button className='rounded-2xl text-white text-xl  border-none w-20 h-7 bg-orange-200'>Reset</button>}
            </div>
            {won && <p className='text-2xl text-green-500 font-bold'>You Won This Game in {(endTime - startTime) / 1000} Seconds</p>}
            <div className='gap-5 justify-around flex-wrap w-[50%] flex flex-row '>
                {time &&
                    data.map((item) => (
                        <img src={item.img} alt='pic' className='w-[160px] h-[160px] rounded-3xl border-2 border-orange-500' />
                    ))
                }
                {!time &&
                    data.map((item) => (
                        (item.solid || item.state) ? <img src={item.img} alt='pic' className='w-[160px] h-[160px] rounded-3xl border-2 border-green-500' /> :
                            <div onClick={() => clicked(item)} className='hover:cursor-pointer w-[160px] h-[160px] rounded-3xl border-[3px] border-red-500 bg-orange-500 '> </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Medium;
