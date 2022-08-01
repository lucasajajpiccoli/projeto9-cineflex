import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "../styles/reset.css";

import Header from './common/Header';
import List from './List';
import Time from './Time';
import Seats from './Seats';
import Success from './Success';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/sessoes/:idFilme" element={<Time />} />
                <Route path="/assentos/:idSessao" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;