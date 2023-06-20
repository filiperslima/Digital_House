import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';


function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    if(language.id == 'EN'){
      setLanguage(languages.portuguese)
    } else if (language.id == 'PT') {
      setLanguage(languages.spanish)
    } else {
      setLanguage(languages.english)
    }
  }

  return (
    <div className="App">
      <>
        <LanguageContext.Provider value={{ language, handleChangeLA }}>
          <Navbar />
          <Body />
        </LanguageContext.Provider>
      </>
    </div>
  )
}

export default App