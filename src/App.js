import './app.css'
import Topnav from './component/top/Topnav'
import Sidebar from './component/sidebar/Sidebar';
import Home from './component/pages/homes/Home';

function App() {
    return (
        <div className="App">
            <Topnav/>
            <div className="container">
                <Sidebar/>
                <Home />
            </div>
        </div>
    );
}

export default App;