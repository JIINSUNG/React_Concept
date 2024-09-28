import React, { useEffect, useState } from "react";

export type LifeCycleProps = {
    className?: string;
};

export const LifeCycle: React.FC<LifeCycleProps> = ({ className }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const addLog = (message: string) => {
        setLogs(prevLogs => [...prevLogs, message]);
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때
        addLog("컴포넌트가 마운트되었습니다.");

        return () => {
            addLog("컴포넌트가 언마운트되었습니다.");
        };
    }, [count]);

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className="flex gap-5">
                <button onClick={() => setCount(prev => prev + 1)}>+1</button>
                <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            </div>
            <h1>라이프 사이클 순서</h1>
            <p>현재 카운트 : {count}</p>
            {logs.map((log, index) => (
                <p key={index}>{log}</p>
            ))}
        </div>
    );
};
