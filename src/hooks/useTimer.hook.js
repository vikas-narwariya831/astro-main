'use client'
import { useState } from "react";

let timerId;

const useTimer = (secondsInput = 60) => {

    const [isRunning, setRunning] = useState(false);
    const [rounds, setRounds] = useState(secondsInput);

    const seconds = String(rounds % 60).padStart(2, '0');
    const minutes = Math.floor((rounds % 3600) / 60);

    const stopTimer = () => {
        setRunning(false);
        clearInterval(timerId);
    }

    const resetTimer = () => {
        setRounds(secondsInput);
        stopTimer();
    }

    const startTimer = () => {

        setRunning(true);

        if (rounds === 0) {
            setRounds(secondsInput);
        }

        timerId = setInterval(() => {
            setRounds((prev) => {

                if (prev !== 0) return prev - 1;

                stopTimer();
                return 0;

            })
        }, 1000)

    }

    return { startTimer, stopTimer, resetTimer, isRunning, states: { seconds, minutes } }
}


export { useTimer }