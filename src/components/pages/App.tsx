import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components/macro'
import { Input } from '../../toDelete/Input'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../widgets/Layout'
import { Home } from '../widgets/Home'
import { Cards } from './Cards';



function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Route>
    </Routes>
    </>
  )
}

export default App;
