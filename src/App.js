import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content'



function App() {
  return (<div className='App'>
    <Header />
    <Content />
  </div>
  );
}

export default App;
