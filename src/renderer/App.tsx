import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomeScreen } from './screens/Home';

/**
 * @description App
 */
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};
