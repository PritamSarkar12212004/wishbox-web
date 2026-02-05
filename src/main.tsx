import { createRoot } from 'react-dom/client'
import './styles/root/index.css'
import RootRoutes from './routes/RootRoutes'
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from './services/store/store';
import RootWraper from './components/layout/wraper/RootWraper';

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <BrowserRouter>
      <RootWraper>
        <RootRoutes />
      </RootWraper>
    </BrowserRouter>
  </Provider >
)
