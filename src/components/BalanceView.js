import React, { useState, useEffect } from 'react';
import './BalanceView.css';

const BalanceView = ({ groupId }) => {
  const [balances, setBalances] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/groups/${groupId}/balances`);
        const data = await res.json();
        if (res.ok) {
          setBalances(data.balances || []);
        } else {
          setError(data.message || 'Failed to fetch balances');
        }
      } catch (err) {
        setError('Error fetching balances');
      }
    };

    if (groupId) {
      fetchBalances();
    }
  }, [groupId]);

  return (
    <div className="balance-view">
      <h2>Group Balances</h2>
      {error && <p className="error">{error}</p>}
      {balances.length === 0 ? (
        <p>No balances to display.</p>
      ) : (
        <ul>
          {balances.map((balance, index) => (
            <li key={index}>
              <span>{balance.from}</span> owes <span>{balance.to}</span>: ₹{balance.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BalanceView;