import ReactDOM from 'react-dom/client';
import App from './components/pages/App';
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from 'store/cardContext'
import { GameLoopProvider } from 'store/gameLoopContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <CardProvider>
      <GameLoopProvider>
        <App />
      </GameLoopProvider>
    </CardProvider>
  </BrowserRouter>
);
