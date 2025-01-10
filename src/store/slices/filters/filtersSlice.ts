import { createSlice } from '@reduxjs/toolkit';
import { CATEGORY, CategoryList, FiltersState, LANGUAGE, LanguageList } from '../../../types/global';

const initialState: FiltersState = {
  category: CATEGORY.Popular,
  language: LANGUAGE.English,
  page: 1,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, { payload }: { payload: CategoryList }) => {
      state.category = payload;
      state.page = 1;
    },
    setLanguage: (state, { payload }: { payload: LanguageList }) => {
      state.language = payload;
      state.page = 1;
    },
    setPage: (state, { payload }: { payload: number }) => {
      state.page = payload;
    },
  },
});

export const { setCategory, setLanguage, setPage } = filtersSlice.actions;
