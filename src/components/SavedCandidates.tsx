import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces'; // Assuming you have the Candidate interface

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSavedCandidates(JSON.parse(savedData));
    }
  }, []);

  // Function to delete a saved candidate
  const deleteCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.login !== login);
    setSavedCandidates(updatedCandidates); // Update state
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); // Update localStorage
  };

  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.name} width="50" />
                </td>
                <td>{candidate.name || candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td>
                  <button onClick={() => deleteCandidate(candidate.login)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates available.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
