import {create} from 'zustand';

const useStore = create((set) => ({
  filterComments: false,
  setFilterComments: (value) => set({ filterComments: value }),
}));

export default useStore;
