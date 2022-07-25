import React from 'react';
import { getInvoices } from '../data';
import { Link, Outlet, useParams } from 'react-router-dom';
function Invoices() {
  let invoices = getInvoices();
  return (
    <div>
      <nav style={{ pading: '1rem 0' }}>
        <h1>Invoices details here</h1>
        {invoices.map((item) => {
          return (
            <Link
              to={`/invoices/${item.number}`}
              key={item.number}
              style={{ display: 'block' }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
}

export default Invoices;
