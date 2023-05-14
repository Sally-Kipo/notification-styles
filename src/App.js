import React from 'react';
import Notification from './Components/Notification';




function App() {
    return (
      <div className='App'>
        <Notification type="success" />
        <Notification type="error" />
        <Notification type="warning" />
        <Notification type="info" />
      </div>
    );
    }
  export default App;
  
  
