import './Home.css';
import NAV from './Components/NAV'
import HOME from './Components/HOME'



import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import More from "../src/Components/More"

function App() {
  return (
<Router>
  <NAV />
  <Routes>
    <Route path="/" element={<HOME />} />
    <Route path="/more" element={<More />} />
  </Routes>
</Router>
  );
}

export default App;
