import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrompt } from '../hooks/usePrompt';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  usePrompt('Are you sure you want to leave? Your changes will be lost.', isDirty);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDirty(false);
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contact Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;