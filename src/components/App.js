import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "../styles/reset.css";

import Header from './common/Header';
import List from './List';
import Time from './Time';
import Seats from './Seats';
import Success from './Success';

function App() {
    const [order, setOrder] = useState({
        ids: [],
        nome: "",
        cpf: "",
        title: "",
        date: "",
        time: "",
    });

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/sessoes/:idFilme" element={<Time />} />
                <Route path="/assentos/:idSessao" element={
                    <Seats
                        order={order}
                        setOrder={setOrder}
                    />
                }/>
                <Route path="/sucesso" element={
                    <Success
                        order={order}
                        setOrder={setOrder}                
                    />
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;