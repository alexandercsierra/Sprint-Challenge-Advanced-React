import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('does app render', ()=>{
  const container = render(<App/>);
})


test('does PlayersList render', ()=>{
  const container = render(<App/>);
  const playersList = container.PlayersList;
})

test('is dark mode working', ()=>{
  const container = render(<App/>);
  const button = container.getByTestId("dark");
  expect(button.textContent).toBe("Dark Mode");
  fireEvent.click(button);
  expect(button.textContent).toBe("Light Mode");
  fireEvent.click(button);
  expect(button.textContent).toBe("Dark Mode");
})


