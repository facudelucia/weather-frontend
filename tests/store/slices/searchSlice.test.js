import { searchSlice, setSearch } from "../../../src/store/slices/searchSlice";
import { initialState, searchingState } from "../../fixtures/searchFixture";

describe('searchSlice test', () => {
    test('should return initial state', () => {
        const state = searchSlice.reducer(initialState, {})
        expect(state).toEqual(initialState)
    })
    test('should update initial state', () => {
        const state = searchSlice.reducer(initialState, setSearch(searchingState.search))
        expect(state).toEqual(searchingState)
    })
})