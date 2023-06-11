import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    </Provider>
   
  </React.StrictMode>
);
