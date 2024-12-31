// App.d.ts
declare module './App.jsx' {
    import React from 'react';
  
    interface AppProps {
      // Add any props that your App component expects
    }
  
    const App: React.FC<AppProps>;
  
    export default App;
  }