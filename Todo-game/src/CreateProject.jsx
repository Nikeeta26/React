import React, { useState } from 'react';

const CreateProject = () => {
  const [form, setForm] = useState({
    projectTheme: '',
    reason: 'For Business',
    type: 'Internal',
    division: 'Filters',
    category: 'Quality A',
    priority: 'High',
    department: 'Strategy',
    startDate: '',
    endDate: '',
    location: 'Pune',
    status: 'Registered',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', form);
    // Handle form submission logic here
  };

  return (
    <div className="create-project">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Project Theme</label>
          <input
            type="text"
            name="projectTheme"
            value={form.projectTheme}
            onChange={handleChange}
            placeholder="Enter Project Theme"
          />
        </div>

        <div>
          <label>Reason</label>
          <select name="reason" value={form.reason} onChange={handleChange}>
            <option value="For Business">For Business</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div>
          <label>Type</label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="Internal">Internal</option>
            <option value="External">External</option>
          </select>
        </div>

        <div>
          <label>Division</label>
          <select name="division" value={form.division} onChange={handleChange}>
            <option value="Filters">Filters</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <div>
          <label>Category</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="Quality A">Quality A</option>
            <option value="Quality B">Quality B</option>
          </select>
        </div>

        <div>
          <label>Priority</label>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label>Department</label>
          <select name="department" value={form.department} onChange={handleChange}>
            <option value="Strategy">Strategy</option>
            <option value="Operations">Operations</option>
          </select>
        </div>

        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Location</label>
          <select name="location" value={form.location} onChange={handleChange}>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={form.status}
            readOnly
          />
        </div>

        <button type="submit">Save Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
