import { createRoot } from 'react-dom/client'
import './styles/root/index.css'
import RootRoutes from './routes/RootRoutes'
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store, persistor } from './services/store/store';
import { PersistGate } from "redux-persist/integration/react";

import RootWraper from './components/layout/wraper/RootWraper';

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RootWraper>
          <RootRoutes />
        </RootWraper>
      </BrowserRouter>
    </PersistGate>
  </Provider >
)
