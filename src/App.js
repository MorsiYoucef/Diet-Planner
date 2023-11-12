import './App.css'
import Header from './components/Header'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="two-impo">
        <Header />
        <Content1 />
      </div>
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  )
}

export default App
