import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';  // Import PrimeReact styles
import 'primeicons/primeicons.css';  // Import PrimeIcons

const AiToolList = () => {
  const [tools, setTools] = useState([]);  // To store fetched data
  const [loading, setLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);  // To track errors

  // Fetch AI tools data on component mount
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/ai-tools');  // Replace with your API URL
        setTools(response.data);  // Store fetched data in the state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (err) {
        setError(err.message);  // Set error message if API call fails
        setLoading(false);  // Set loading to false in case of error
      }
    };

    fetchTools();
  }, []);  // Empty dependency array to run once on mount

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if API call fails
  }

  return (
    <div>
      <h1>AI Tools List</h1>
      <DataTable value={tools} paginator rows={10} loading={loading}>
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Tool Name" sortable />
        <Column field="description" header="Description" sortable />
        <Column field="category" header="Category" sortable />
        <Column field="created_at" header="Created At" sortable />
        {/* Add more columns as needed */}
      </DataTable>
    </div>
  );
};

export default AiToolList;
