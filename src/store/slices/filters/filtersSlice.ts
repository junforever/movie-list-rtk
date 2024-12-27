import { createSlice } from '@reduxjs/toolkit';
import { CATEGORY, CategoryList, FiltersState, LANGUAGE, LanguageList } from '../../../types/global';

const initialState: FiltersState = {
  page: 1,
  category: CATEGORY.Popular,
  language: LANGUAGE.English,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPage: (state, { payload }: { payload: number }) => {
      state.page = payload;
    },
    setCategory: (state, { payload }: { payload: CategoryList }) => {
      state.category = payload;
    },
    setLanguage: (state, { payload }: { payload: LanguageList }) => {
      state.language = payload;
    },
  },
});

export const { setPage, setCategory, setLanguage } = filtersSlice.actions;
