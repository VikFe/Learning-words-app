import './App.css';
import Header from './components/Header/Header';
import words from '../src/words.json';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <main>
            <div className='card__container'>
            <Routes>
              <Route path='/' element={<Table initialWords={words} />} />
              <Route path='/cards' element={
                <CardList words={words}>
                {words.map((card) =>(
                  <Card
                  key={card.id}
                  english={card.english}
                  transcription={card.transcription}
                  russian={card.russian}
                  />
                ))}
                </CardList>
                }
              />
              <Route path='*' element={<NotFound />}
              />
            </Routes>
            </div>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
