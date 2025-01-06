import { MoviesList } from '@/components/MoviesList/MoviesList';
import { MovieFilters } from './components/MovieFilters/MovieFilters';
function App() {
  return (
    <>
      <MovieFilters />
      <MoviesList />
    </>
  );
}

export default App;
