import './App.css';
import Header from './components/Header/Header';
import words from './words';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='card__container'>
      {words.map((card) =>(
        <Card
        key={card.id}
        english={card.english}
        transcription={card.transcription}
        russian={card.russian}
        
        />
      ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
