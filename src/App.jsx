import {Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Leidos from './Leidos.jsx';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/leidos' element={<Leidos />} />
            </Routes>
        </>
    );
}
export default App;
