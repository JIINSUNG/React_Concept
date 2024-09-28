import "./App.css";
import "./index.css";
import { useState } from "react";
import { UseState } from "./concept/hooks/UseState.tsx";
import { UseEffect } from "./concept/hooks/UseEffect.tsx";
import { UseMemo } from "./concept/hooks/UseMemo.tsx";
import { UseCallback } from "./concept/hooks/UseCallback.tsx";
import { LifeCycle } from "./concept/lifecycle/LifeCycle.tsx";

function App() {
    const [step, setStep] = useState(0);

    return (
        <main>
            <h1>React 기본 개념</h1>
            <p>숫자가 변하면 리랜더링 : {Math.random()}</p>
            <div className="flex gap-5">
                <button onClick={() => setStep(0)}>useState</button>
                <button onClick={() => setStep(1)}>useEffect</button>
                <button onClick={() => setStep(2)}>useMemo</button>
                <button onClick={() => setStep(3)}>useCallback</button>
                <button onClick={() => setStep(4)}>LifeCycle</button>
                <button onClick={() => setStep(5)}>useMemo(자식)</button>
            </div>
            {(() => {
                switch (step) {
                    case 0:
                        return <UseState />;
                    case 1:
                        return <UseEffect />;
                    case 2:
                        return <UseMemo />;
                    case 3:
                        return <UseCallback />;
                    case 4:
                        return <LifeCycle />;
                    default:
                        return null;
                }
            })()}
        </main>
    );
}

export default App;
