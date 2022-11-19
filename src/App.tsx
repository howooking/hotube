import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/YoutubeContextApi';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  );
}
