import './App.css';

import React, { Suspense } from 'react';

const Remote = React.lazy(() => import('remoteApp/App'));

function App() {
  return (
    <>
      <h1>Host</h1>
      <Suspense fallback={<p>Host...</p>}>
        <Remote />
      </Suspense>
    </>
  );
}

export default App;