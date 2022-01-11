import React, { useContext } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Toggle } from './components/Toggle';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  
  return (
    <ThemeContext.Provider value={{
      theme: 'default'
    }}>
      
      <div className="flex flex-col w-screen h-screen justify-center items-center">

        <div className="flex flex-row gap-md max-w-6xl gap-10">
          <Card imageUrl="http://placeimg.com/640/480/nature?random=1" heading="Card one" description="This is an example card with some placeholder content." />
          <Card imageUrl="http://placeimg.com/640/480/nature?random=2" heading="Card one" description="This is an example card with some placeholder content." />
          <Card imageUrl="http://placeimg.com/640/480/nature?random=3" heading="Card one" description="This is an example card with some placeholder content." />
        </div>

        
      </div>
      
    </ThemeContext.Provider>
  )
}

export default App