import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app with no explosions', () => {
  let root = document.createElement('div')
  document.body.appendChild(root)
  render(<App/>)
});

test('opens resume in new tab', ()=> {
  let btn = document.querySelector('.resume-btn')
  let route = 'static/media/Resume.86cbcc82.pdf'
  fireEvent.click(btn)
  expect(document.URL).toContain(route)
})
