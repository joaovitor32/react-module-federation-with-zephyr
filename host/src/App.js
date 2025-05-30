import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import React, { Suspense } from 'react';
const Remote = React.lazy(() => import('remoteApp/App'));
function App() {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Host" }), _jsx(Suspense, { fallback: _jsx("p", { children: "Host..." }), children: _jsx(Remote, {}) })] }));
}
export default App;
