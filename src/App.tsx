
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <p>inicio do layout da pagina</p>
      <p>header da pagina</p>
      <h1>React Router</h1>
      <Outlet />
      <p>footer da Pagina</p>
      <p>fim do layout da pagina</p>
    </div>
  );
}

export default App
