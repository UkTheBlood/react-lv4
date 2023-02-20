import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
  );
}

export default App;
