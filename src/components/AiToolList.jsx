// src/components/AiToolList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiTools } from '../redux/aiToolSlice';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';  // Import PrimeReact styles
import 'primeicons/primeicons.css';  // Import PrimeIcons

const AiToolList = () => {
  const dispatch = useDispatch();
  const { tools, loading, error } = useSelector((state) => state.aiTools);

  const imageBodyTemplate = (tool) => {
    return <img src={`${tool.image}`} alt={tool.image} 
    style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
    className="w-6rem shadow-2 border-round" />;
  };

  const goToLinkTemplate = (tool) => {
    return (
            <Button label="Link" link onClick={() =>  window.open(tool.link, '_blank')}/>
    );
  };

  useEffect(() => {
    dispatch(fetchAiTools());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>AI Tools List</h1>
      <DataTable value={tools} paginator rows={10} loading={loading} tableStyle={{ minWidth: '60rem' }}>
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Tool Name" sortable />
        <Column field="description" header="Description" sortable />
        <Column body={imageBodyTemplate} header="Image"  />
        <Column field="usage" header="Usage" sortable />
        <Column field="link" header="Go To Link" body={goToLinkTemplate} />
        {/* <Column field="created_at" header="Created At" sortable /> */}
        {/* Add more columns as needed */}
      </DataTable>
    </div>
  );
};

export default AiToolList;
