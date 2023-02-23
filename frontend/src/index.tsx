import './styles.css';

import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';

const div = document.createElement('div');

document.body.append(div);

const root = ReactDOM.createRoot(div);

const queryClient = new QueryClient();

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MantineProvider>,
);
