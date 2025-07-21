// import ScrollProgressBar from './components/ScrollProgressBar'
import HomePage from "./pages/HomePage";
// import Container from "./Container";
import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";

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
                <HomePage />
            {/* </Container> */}
        </ClickSpark>
    );
}

export default App;
