import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout';
import Portfolio from './component/Portfolio/Portfolio'
import ContactForm from './component/ContactForm/ContactForm';
import ContactCard from './component/Contactlist/Contactlist';
 import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Layout/>
      <Portfolio/>
      <ContactForm/>
      </header>
    </div> */}

     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>} >
       <Route index element={<Portfolio />} />
       <Route path="/contact" element={<ContactForm />} />
       <Route path="/contactlist" element={<ContactCard/>} />
       </Route>
     </Routes>
   </BrowserRouter>


</header>
</div>
  );
}
export default App;
