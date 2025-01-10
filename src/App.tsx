import { MoviesList } from '@/components/MoviesList/MoviesList';
import { MovieFilters } from './components/MovieFilters/MovieFilters';
import { NeonText } from './components/NeonText/NeonText';

const getNeonText = (text: string) => {
  const arrText = text.split('');
  const characters = arrText.map(character => ({
    text: character,
    color: '#fff',
  }));
  return characters;
};

function App() {
  return (
    <>
      <NeonText characters={getNeonText('TOP Movies')} fontSize="7xl" textAlign="center" />
      <MovieFilters title="The best of the best" />
      <div className="my-8"></div>
      <MoviesList />
    </>
  );
}

export default App;
