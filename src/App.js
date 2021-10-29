import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Card from './components/Section/Card/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="Container">
        <Section />
        <Section />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
