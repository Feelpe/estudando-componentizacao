import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/header';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>

      <div className="container">
        <Header selectedGenreId={selectedGenreId}/>

        <main>
          <Content selectedGenreId={selectedGenreId}/>
        </main>
      </div>
    </div>
  )
}