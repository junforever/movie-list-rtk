import { CATEGORY, CategoryList, LANGUAGE, LanguageList, RULE, RuleList } from '@/types/global';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useStoreDispatch } from '@/store/store';
import { setCategory, setLanguage } from '@/store/slices/filters/filtersSlice';
import { setRule } from '@/store/slices/formatters/formattersSlice';

interface MovieFiltersProps {
  title?: string;
}
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

export const MovieFilters = ({ title }: MovieFiltersProps) => {
  const dispatch = useStoreDispatch();
  const handleCategoryChange = (value: CategoryList) => {
    dispatch(setCategory(value));
  };
  const handleLanguageChange = (value: LanguageList) => {
    dispatch(setLanguage(value));
  };
  const handleRuleChange = (value: RuleList) => {
    dispatch(setRule(value));
  };

  return (
    <section className="flex flex-col mt-4">
      {title && <h1 className="text-white text-5xl">{title}</h1>}
      <div className="flex justify-between gap-4 flex-col sm:flex-row mt-4">
        <CustomSelect<CategoryList> options={categoryOptions} label="Category:" handleOnChange={handleCategoryChange} />
        <CustomSelect<LanguageList> options={languageOptions} label="Language:" handleOnChange={handleLanguageChange} />
      </div>
      <div className="flex flex-row sm:flex-row-reverse mt-4">
        <CustomSelect<RuleList> options={ruleOptions} label="Background Rule:" handleOnChange={handleRuleChange} />
      </div>
    </section>
  );
};
