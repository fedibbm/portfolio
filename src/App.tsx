// import ScrollProgressBar from './components/ScrollProgressBar'
import HomePage from "./pages/HomePage";
// import Container from "./Container";
import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            {/* <Container> */}
                {/* <ScrollProgressBar /> */}
             <Routes>
                 <Route path="/"  element={<HomePage />} />
             </Routes>
            {/* </Container> */}
        </ClickSpark>
    );
}

export default App;
