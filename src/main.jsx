import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import './main.css';

let rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoices />} />
      </Route>
      <Route
        path="*"
        element={
          <p style={{ padding: '1rem 0' }}>There's nothing here fuck off</p>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
