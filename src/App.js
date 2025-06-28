import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import GroupForm from './components/GroupForm';
import ExpenseForm from './components/ExpenseForm';
import BalanceView from './components/BalanceView';
import SettleUpForm from './components/SettleUpForm'; // ✅ Add this line

function App() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>FairFare</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>User Registration</h2>
        <RegisterForm />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>User Login</h2>
        <LoginForm />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Create Group</h2>
        <GroupForm />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Add Expense</h2>
        <ExpenseForm />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>View Balances</h2>
        <BalanceView />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Settle Up</h2>
        <SettleUpForm />
      </div>
    </div>
  );
}

export default App;