import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PersonalInfoType = {
  name: string | null;
  agentId: string | null;
  clientId: string | null;
};

const initialState = {
  name: null,
  agentId: null,
  clientId: null,
} as PersonalInfoType;

export const personalInfoSlice = createSlice({
  name: "PersonalInfoType",
  initialState,
  reducers: {
    resetPersonalInfo: () => initialState,
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAgentId: (state, action: PayloadAction<string>) => {
      state.agentId = action.payload;
    },
    setClientId: (state, action: PayloadAction<string>) => {
      state.clientId = action.payload;
    },
  },
});

export const { resetPersonalInfo, setName, setAgentId, setClientId } =
  personalInfoSlice.actions;
const personalInfoReducer = personalInfoSlice.reducer;
export default personalInfoReducer;
