import { MoviesList } from '@/components/MoviesList/MoviesList';
import { MovieFilters } from './components/MovieFilters/MovieFilters';
function App() {
  return (
    <>
      <MovieFilters title="TOP Movies" />
      <div className="my-8"></div>
      <MoviesList />
    </>
  );
}

export default App;
