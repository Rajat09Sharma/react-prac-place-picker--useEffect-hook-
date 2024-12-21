import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainnigTime, setRemainningTime] = useState(timer)

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainningTime((prevState) => {
                return prevState - 10;
            });
        }, 10)
        return () => {
            clearInterval(timerId);
        }
    }, [])
    return (
        <progress value={remainnigTime} max={timer} />
    )
}
