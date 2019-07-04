import React from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import ChangeViewOptions from './ChangeViewOptions';

const App = () => {
    return (
        <div>
            <Header title="React Movie Cards" />
            <ChangeViewOptions />
            <div className="mt-5">
                <Movies />
            </div>
        </div>
    );
};

export default App;