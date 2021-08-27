import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    
    expect(queryByText('5')).toBeInTheDocument();
  });
});

describe('Testando com meus próprios dedos', () => {
  it('Testa se o botão existe e funciona', () => {
    const { queryByText } = renderWithRedux(<App />);
    const btnAdd = queryByText('Clique aqui');

    expect(btnAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
    fireEvent.click(btnAdd);
    expect(queryByText('1')).toBeInTheDocument();
  })

  it('Testa se o valor inicial do contador é 10 e se modifica ao clicar', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const btnAdd = queryByText('Clique aqui');

    expect(queryByText('10')).toBeInTheDocument();
    fireEvent.click(btnAdd);
    expect(queryByText('11')).toBeInTheDocument();
  })
})
