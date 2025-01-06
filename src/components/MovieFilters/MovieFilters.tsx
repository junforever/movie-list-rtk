import { CATEGORY, LANGUAGE, RULE } from '@/types/global';
import { CustomSelect } from '../CustomSelect/CustomSelect';

const categoryOptions = [
  { value: CATEGORY.Popular, label: 'Popular' },
  { value: CATEGORY.MostRelated, label: 'Most Related' },
  { value: CATEGORY.NowPlaying, label: 'Now Playing' },
  { value: CATEGORY.Upcoming, label: 'Upcoming' },
];

const languageOptions = [
  { value: LANGUAGE.English, label: 'English' },
  { value: LANGUAGE.Spanish, label: 'Spanish' },
];

const ruleOptions = [
  { value: RULE.None, label: 'None' },
  { value: RULE.OddEven, label: 'Odd / Even' },
  { value: RULE.PrimeNumber, label: 'Prime Number' },
];

export const MovieFilters = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-white text-5xl">TOP Movies</h1>
      <div className="flex justify-between gap-4 mt-8">
        <CustomSelect options={categoryOptions} label="Category:" />
        <CustomSelect options={languageOptions} label="Language:" />
      </div>
      <div className="flex flex-row-reverse justify-between gap-4 mt-2">
        <CustomSelect options={ruleOptions} label="Rule:" />
      </div>
    </section>
  );
};
