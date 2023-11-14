import './App.css'
import Header from './components/Header'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Footer from './components/Footer'
import Content4 from './components/Content4'
import Content5 from './components/Content5'

function App() {
  return (
    <div className="App">
      <div className="two-impo">
        <Header />
        <Content1 />
      </div>
      <Content4 />
      <Content5 />
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  )
}

export default App
