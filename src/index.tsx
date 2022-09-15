import ReactDOM from 'react-dom/client';
import App from './components/pages/App';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from 'store/context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
