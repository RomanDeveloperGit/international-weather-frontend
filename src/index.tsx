import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './i18n';
import store from './store';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import 'normalize.css';

import './assets/css/fonts.css';
import './assets/css/main.css';
import './assets/css/variables.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </I18nextProvider>
  </StrictMode>,
);
