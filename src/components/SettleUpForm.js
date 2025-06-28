import React, { useState } from 'react';
import './SettleUpForm.css';

const SettleUp = () => {
  const [groupId, setGroupId] = useState('');
  const [fromUser, setFromUser] = useState('');
  const [toUser, setToUser] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSettleUp = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/settle-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupId, fromUser, toUser, amount }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Settlement recorded successfully.');
    } else {
      setMessage(data.message || 'Settlement failed.');
    }
  };

  return (
    <div className="settleup-container">
      <h2>Settle Up</h2>
      <form onSubmit={handleSettleUp}>
        <input
          type="text"
          placeholder="Group ID"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="From User ID"
          value={fromUser}
          onChange={(e) => setFromUser(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To User ID"
          value={toUser}
          onChange={(e) => setToUser(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Settle</button>
      </form>
      {message && <p className="status">{message}</p>}
    </div>
  );
};

export default SettleUp;