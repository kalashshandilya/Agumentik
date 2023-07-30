import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';



const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleNavItemClicked = (label: string) => {
    
    console.log(`Navigation item clicked: ${label}`);
  };

  return (
    <div>
      <header>
        {website design dribbble}
      </header>
      <body id="details" className="logged-in not-pro not-player not-self not-team not-on-team dribbble-v1 shot-page">
        <Navbar onNavItemClicked={handleNavItemClicked} />
        
      </body>
    </div>
  );
};

export default App;


