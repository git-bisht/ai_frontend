// src/components/AiToolList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiTools } from '../store/aiToolSlice';

const AiToolList = () => {
  const dispatch = useDispatch();
  const { tools, loading, error } = useSelector((state) => state.aiTools);

  useEffect(() => {
    dispatch(fetchAiTools());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>AI Tools List</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            {tool.name} - {tool.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiToolList;
