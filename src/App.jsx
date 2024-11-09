import Article from "./components/article/article.jsx"
import Brand from "./components/brand/Brand.jsx"
import Cta from "./components/cta/Cta.jsx"
import Feature from "./components/feature/Feature.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Blog from './containers/blog/Blog.jsx'
import Features from "./containers/feature/Features.jsx"
import Footer from './containers/footer/Footer.jsx'
import Header from './containers/header/Header.jsx'
import Possibility from './containers/possibility/Possibility.jsx'
import WhatGPT from './containers/whatGPT/whatGPT.jsx'
import './app.css'

function App() {

  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>


    </div>
  )
}

export default App
