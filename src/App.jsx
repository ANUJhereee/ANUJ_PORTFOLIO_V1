
import { useState } from "react";

import Home from "./pages/Home";
import Content from "./pages/Content";
import WorkingWith from "./pages/WorkingWith";
import Loader from "./pages/Loader";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && (
                <Loader onFinish={() => setLoading(false)} />
            )}

            <Home />
            <Content />
            <WorkingWith />
        </>
    );
}

export default App;
