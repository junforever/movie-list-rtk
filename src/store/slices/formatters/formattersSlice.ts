import { RULE, RuleList } from '@/types/global';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rule: RULE.None as RuleList,
};

export const formattersSlice = createSlice({
  name: 'formatters',
  initialState,
  reducers: {
    setRule: (state, { payload }: { payload: RuleList }) => {
      state.rule = payload;
    },
  },
});

export const { setRule } = formattersSlice.actions;
