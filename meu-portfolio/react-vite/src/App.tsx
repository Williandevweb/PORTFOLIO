import { Header } from './components/portfolio/index';
import { Main } from './components/portfolio/index';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({duration: 2500});
  })
  return (
    <div>
        <Header/>
        <Main/>       
    </div>  
  )
}


export default App
