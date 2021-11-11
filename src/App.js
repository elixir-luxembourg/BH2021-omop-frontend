import './App.css';
import {Header} from "./components/Header";
import {QueryContainer} from "./components/QueryContainer";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <QueryContainer/>
            <Footer/>
        </div>
    );
}

export default App;
