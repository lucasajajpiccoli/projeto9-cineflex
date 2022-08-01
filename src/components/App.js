import { Fragment } from 'react';

import "../styles/reset.css"

import Header from './common/Header';
import List from './List';
import Time from './Time';
import Seats from './Seats';
import Success from './Success';

function App() {
    return (
        <>
            <Header />
            <List />
            <Time />
            <Seats />
            <Success />
        </>
    );
}

export default App;