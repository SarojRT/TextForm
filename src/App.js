// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //Whether the dark mode is enabled

  const [textmode, settextMode] = useState(null);

  const [gbutton, setGbutton] = useState('success');
  const [bbutton, setBbutton] = useState('primary');
  const [pbutton, setPbutton] = useState('info');
  const [dbutton, setDbutton] = useState('dark');

  const [gtbutton, setGtbutton] = useState('light');
  const [btbutton, setBtbutton] = useState('light');
  const [ptbutton, setPtbutton] = useState('light');
  const [dtbutton, setDtbutton] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {    //For dark mode
    if (mode === 'light') {
      setMode('dark');
      settextMode('dark');
      setDbutton('light');
      setDtbutton('dark');
      document.body.style.backgroundColor = '#303c4c';
      showAlert("Darkmode has been enabled", "success")
    }
    else {
      setMode('light');
      settextMode('light');
      setDbutton('dark');
      setDtbutton('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success")
    }
  }

  const toggleModeg = () => {    //For green mode
    if (mode === 'light') {
      setMode('success');
      settextMode('dark');
      setGbutton('light');
      setGtbutton('success');
      document.body.style.backgroundColor = '#0a3f1b';
      showAlert("Greenmode has been enabled", "success")
    }
    else {
      setMode('light');
      settextMode('light');
      setGbutton('success');
      setGtbutton('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success")
    }
  }

  const toggleModeb = () => {    //For Blue mode
    if (mode === 'light') {
      setMode('primary');
      settextMode('dark');
      setBbutton('light');
      setBtbutton('primary');
      document.body.style.backgroundColor = '#011a3c';
      showAlert("Bluemode has been enabled", "success")
    }
    else {
      setMode('light');
      settextMode('light');
      setBbutton('primary');
      setBtbutton('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success")
    }
  }

  const toggleModep = () => {    //For Yellow mode
    if (mode === 'light') {
      setMode('info');
      settextMode('dark');
      setPbutton('light');
      setPtbutton('info');
      document.body.style.backgroundColor = '#016570';
      showAlert("Yellowmode has been enabled", "success")
    }
    else {
      setMode('light');
      settextMode('light');
      setPbutton('info');
      setPtbutton('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUpdate" mode={mode} textmode={textmode} toggleMode={toggleMode} toggleModeg={toggleModeg} toggleModeb={toggleModeb} toggleModep={toggleModep} gbutton={gbutton} bbutton={bbutton} pbutton={pbutton} dbutton={dbutton} gtbutton={gtbutton} btbutton={btbutton} ptbutton={ptbutton} dtbutton={dtbutton} home="Home" about="About us" dropdown="Categories" />

        <Alert alert={alert} />

        <div className="container my-3"/>
          {/* <Routes> */}
            {/* <Route excat path="/about" element={<About />} /> */}

            {/* <Route exact path="/" element={ */}
              <Textform heading="Enter the text to change" mode={mode} showAlert={showAlert} /> 
              {/* <Textform heading="Enter the text to change" mode={mode} showAlert={showAlert} />} /> */}
          {/* </Routes> */}
        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
