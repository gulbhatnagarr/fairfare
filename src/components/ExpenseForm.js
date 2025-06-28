import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [splitBetween, setSplitBetween] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      description,
      amount,
      paidBy,
      splitBetween: splitBetween.split(',').map(id => id.trim()),
    });

    // Clear the form
    setDescription('');
    setAmount('');
    setPaidBy('');
    setSplitBetween('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Paid By (User ID)"
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Split Between (comma-separated User IDs)"
        value={splitBetween}
        onChange={(e) => setSplitBetween(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;