import React, { useMemo, useState } from "react";

export const UseMemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const expensiveCalculation = (count: number) => {
        console.log("Expensive calculation running...");
        return count * Math.PI;
    };

    const countMultiplePI = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <main className="flex flex-col items-center p-10">
            <div className="flex gap-5">
                <button onClick={() => setCount(prev => prev + 1)}>+1</button>
                <button onClick={() => setCount(prev => prev - 1)}>-1</button>
                <button onClick={() => setCount(0)}>0</button>
            </div>
            <div>count * PI = {countMultiplePI}</div>
        </main>
    );
};
