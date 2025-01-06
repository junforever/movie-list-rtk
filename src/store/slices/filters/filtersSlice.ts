import { createSlice } from '@reduxjs/toolkit';
import { CATEGORY, CategoryList, FiltersState, LANGUAGE, LanguageList } from '../../../types/global';

const initialState: FiltersState = {
  category: CATEGORY.Popular,
  language: LANGUAGE.English,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, { payload }: { payload: CategoryList }) => {
      state.category = payload;
    },
    setLanguage: (state, { payload }: { payload: LanguageList }) => {
      state.language = payload;
    },
  },
});

export const { setCategory, setLanguage } = filtersSlice.actions;
