import './App.css';
import Formulario from './components/Formulario';
import { ContenedorStyled,TituloStyled } from './style/Styled';

function App() {
  return (
    <div className="App">
      <ContenedorStyled>
        <TituloStyled>LISTA DE CONTACTOS</TituloStyled>
        <Formulario/>
      </ContenedorStyled>
    </div>
  );
}

export default App;
