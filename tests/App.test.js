import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import App from '../src/App'
import { configureStore } from "@reduxjs/toolkit"
import { searchSlice } from "../src/store/slices/searchSlice"
import { fireEvent, screen } from "@testing-library/dom"

const store = configureStore({
    reducer: {
        search: searchSlice.reducer
    }
})

describe('<App /> tests', () => {
    test('should show App correctly', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        expect(screen.getAllByText('Forecast:').length).toBeGreaterThanOrEqual(1)
    })

    test('click CityItem', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const btn = screen.getByText('New York')
        fireEvent.click(btn)
        const state = store.getState()
        expect(state.search.search).toEqual('New York')
    })

    test('submit form', async () => {
        const searchText = 'Rosario'
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const searchInput = screen.getByPlaceholderText('Search...')
        fireEvent.change(searchInput, { target: { name: 'search', value: searchText } })
        const searchForm = screen.getByTestId('form')
        fireEvent.submit(searchForm)
        const state = store.getState()
        expect(state.search.search).toEqual(searchText)
    })
})