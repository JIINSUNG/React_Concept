import React, { useState } from "react";

export type UseStateProps = {
    className?: string;
};

export const UseState: React.FC<UseStateProps> = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <main className="flex flex-col items-center p-10">
            <div className="flex gap-5">
                <button onClick={() => setCount(prev => prev + 1)}>+1</button>
                <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            </div>
            <div>current count : {count}</div>
        </main>
    );
};
