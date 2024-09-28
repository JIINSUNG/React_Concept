import React, { useEffect, useState } from "react";

export const UseEffect: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        alert("Component Did Mount");
        return () => alert("componentWillUnmount");
    }, []);

    // useEffect(() => {
    //     alert(`ComponentWillUpdate count : ${count}`);
    // }, [count]);

    useEffect(() => {
        alert(`ComponentWillUpdate count : ${count}`);
    }, [count]);

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
