import React, { useState } from 'react';
import './GroupForm.css';

const GroupForm = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState(['']);

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateGroup({ name: groupName, members });
    setGroupName('');
    setMembers(['']);
  };

  return (
    <div className="group-form-container">
      <h2>Create a Group</h2>
      <form onSubmit={handleSubmit} className="group-form">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
          required
        />
        {members.map((member, index) => (
          <input
            key={index}
            type="text"
            value={member}
            onChange={(e) => handleMemberChange(index, e.target.value)}
            placeholder={`Member ${index + 1} Email`}
            required
          />
        ))}
        <button type="button" onClick={handleAddMember} className="add-member-btn">
          + Add Member
        </button>
        <button type="submit" className="create-group-btn">Create Group</button>
      </form>
    </div>
  );
};

export default GroupForm;