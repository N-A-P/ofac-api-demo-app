import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GET} from '../../networking/networking';
import {ApiEndPoint} from '../../networking';
import {Category} from '../../model/category';

const fetchCategory = createAsyncThunk('getCategory', async (_, thunks) => {
  try {
    const res = await GET({url: ApiEndPoint.category});
    return res.data;
  } catch (error) {
    thunks.rejectWithValue(error);
  }
});
const initState = {
  data: [] as Category[],
  loading: false,
};
type RequestState = 'pending' | 'fulfilled' | 'rejected';

const categorySlice = createSlice({
  name: 'category',
  initialState: initState,
  reducers: {
    clear(state) {
      state = initState;
    },
    setCategory(state, {payload}: PayloadAction<typeof initState>) {
      state.data = payload.data;
      state.loading = payload.loading;
    },
    setLoading(state, {payload}: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
  extraReducers(builder) {
    // builder.addCase(fetchCategory.fulfilled, (state, action) => {
    //     state.data = action.payload?.data || []
    // });
    // builder.addCase(fetchCategory)
  },
});

export const {reducer: categoryReducer, actions: appActions} = categorySlice;
