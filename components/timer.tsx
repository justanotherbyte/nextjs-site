"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ timestamp }: { timestamp: number }) {
    const [isClient, setIsClient] = useState(false);

    const calculateTime = () => {
        const difference = timestamp - Date.now();
        if (difference <= 0) return "00:00:00:00";

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return [days, hours, minutes, seconds]
            .map(v => v.toString().padStart(2, '0'))
            .join(':');
    };

    const [time, setTime] = useState(calculateTime());

    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(() => {
            setTime(calculateTime());
        }, 1000);

        return () => clearInterval(timer);
    }, [timestamp]);

    if (!isClient) {
        return <h3 className="text-center w-full text-5xl text-zinc-200">--:--:--:--</h3>;
    }

    return (
        <h3 className="text-center w-full text-5xl dark:text-white">
            {time}
        </h3>
    );
}