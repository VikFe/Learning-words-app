import './App.css';
import Header from './components/Header/Header';
import words from '../src/words.json';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Header />
      <main className='card__container'>
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
      </main>
      <Table initialWords={words} />
      <Footer />
    </div>
  );
}

export default App;
