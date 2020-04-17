import React from 'react';
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Banner_3 from './components/Banner_3';
import Skills from './components/Skills';
import resume from './images/Resume.pdf';

test('renders app with no explosions', () => {
  let root = document.createElement('div')
  ReactDOM.render(<App/>, root)
});

test('opens resume in new tab', ()=> {
  const route = 'https://sandramkimball.now.sh/static/media/Resume.86cbcc82.pdf'
  const localRoute = 'http://localhost/Resume.pdf'
  const {getByTestId} = render(<App/>)

  const button = getByTestId('resume-btn')
  expect(button.href).toBe(localRoute)
  expect(fireEvent.click(button)).toReturnWith(resume)
})

test('tech stack banner resizes for mobile view', ()=> {
  let root = document.createElement('div')
  const {getByTestId} = render(<Skills/>, root)

  // resize window to mobile view
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 420})
  expect(window.innerWidth).toBe(420)

  // check element style attribute
  const techstack = getByTestId('tech-stack')
  const style = window.getComputedStyle(techstack)
  expect(style.flexDirection).toBe('row')
})

test('project cards resize for mobile view', ()=> {
  let root = document.createElement('div')
  const {getByTestId} = render(<Banner_3/>, root)

  // resize window to mobile view
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 420})
  window.dispatchEvent(new Event('resize'))
  expect(window.innerWidth).toBe(420)

  // check element style attribute
  const card = getByTestId('pj-container')
  const style = window.getComputedStyle(card)
  expect(style.display).toBe('flex')
  // expect(style.width).toBe('95vw')
  // expect(style.height).toBe('100%')
})