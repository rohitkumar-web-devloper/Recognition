import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  permissions: [],
};

export const permissionSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setPermission: (state, {payload}) => {
      // Check if the permissions array is empty
      if (state.permissions.length === 0) {
        // Push the new payload if empty, adding status: true
        state.permissions.push({...payload, status: true});
      } else {
        // Find if the item exists
        const existingItem = state.permissions.find((item) => item.cardId === payload.cardId && item.permissionId === payload.permissionId);

        if (existingItem) {
          // Toggle the status of the existing item if found
          existingItem.status = !existingItem.status;
          // Update the existing item with the rest of the payload
          Object.assign(existingItem, payload);
        } else {
          // Push the new payload if not found, adding status: true
          state.permissions.push({...payload, status: true});
        }
      }
    },
  },
});

export const {setPermission} = permissionSlice.actions;
export default permissionSlice.reducer;
