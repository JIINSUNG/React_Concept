import React, { useCallback, useState } from "react";

export const UseCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1);

    const plusHandler = useCallback(() => {
        setCount(prev => prev + step);
    }, [step]);

    const minusHandler = useCallback(() => {
        setCount(prev => prev - step);
    }, [step]);

    return (
        <main className="flex flex-col items-center p-10 gap-5">
            <div className="flex gap-5">
                <button onClick={() => setStep(prev => prev + 1)}>
                    step +1
                </button>
                <button onClick={() => setStep(prev => prev - 1)}>
                    step -1
                </button>
            </div>
            <div className="flex gap-5">
                <button onClick={() => plusHandler()}>count +</button>
                <button onClick={() => minusHandler()}>count -</button>
            </div>
            <div>current step : {step}</div>
            <div>current count : {count}</div>
        </main>
    );
};
