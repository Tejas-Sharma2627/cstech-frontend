import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import ContextWrapper from "./ContextWrapper";
ReactDOM.render(
  <ContextWrapper>
  <App />
</ContextWrapper>
,
  document.getElementById('root')
);


