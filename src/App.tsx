import {Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/Home.page';

function App() {
    return (
        <div className="bg-red-600">
            <Routes>
                <Route index element={<HomePage></HomePage>}></Route>
            </Routes>
        </div>
    );
}

export default App;
