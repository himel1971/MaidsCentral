import React, { useState } from 'react';

const AskGPT = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    try {
      const response = await fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/ask-chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
  
      const data = await response.json();
      setResponse(data.answer);
      setError('');
    } catch (error) {
      console.error('Error asking question:', error);
      setError('Error communicating with server');
      setResponse('');
    }
  };
  

  return (
    <div className="mx-auto max-w-lg sm:max-w-md lg:max-w-xl">
      <h1 className="text-2xl font-bold mb-4">ChatGPT React Example</h1>
      <textarea
        className="block w-full px-3 py-2 mt-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
        placeholder="Ask a question..."
        value={question}
        onChange={handleQuestionChange}
      />
      <button
        className="block px-3 py-2 bg-blue-500 text-white font-semibold rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleAskQuestion}
      >
        Ask
      </button>
      {error && (
        <div className="text-red-600 mt-2 mb-4">{error}</div>
      )}
      {response && (
        <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded shadow-sm mt-2 mb-4">
          {response}
        </div>
      )}
    </div>
  );
};

export default AskGPT;
