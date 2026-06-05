import { ColorPalette } from './components/ColorPalette/ColorPalette'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Promotions } from './components/Promotions/Promotions'
import { Services } from './components/Services/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Promotions />
        <ColorPalette />
      </main>
      <Footer />
    </>
  )
}

export default App
