import {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {


  //se crean 2 variables linea 1 es la variable y setlinea1 es la funcion que permite modificar esta variable
  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setImagen] = useState('');


  const onChangeLinea1 = function(evento) {
    
    setlinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento) {
    
    setlinea2(evento.target.value)
  }

  const onChangeImagen = function(evento) {
    
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
    var img    = canvas.toDataURL("image/png");
   

    var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = img;
  link.click();



  });
    
  }


  return (
    <div className="App">
      
    <select onChange={onChangeImagen}>
      <option value="gollum">Chico</option> 
      <option value="Ironico">Lisa</option>
      <option value="Asombro">Asombro</option>
      <option value="Suerte">Buena suerte</option>
    </select> <br/>

    <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/> <br/>
    <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/> <br/>
    <button onClick={onClickExportar}>Exportar</button>

    <div className='meme' id="meme">
      <span>{linea1}</span> <br/>
      <span>{linea2}</span>
      <img src={"/img/" + imagen + ".jpg"} />
    </div>

    </div>
  );
}

export default App;
