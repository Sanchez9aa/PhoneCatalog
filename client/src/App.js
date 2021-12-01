import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/home/Home'
import PhonePage from './components/phonePage/PhonePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:phone" element={<PhonePage />} />
      </Routes>
    </Router>
  );
}

export default App;
