import React from 'react';
import { Candidate } from '../interfaces/interfaces'; // Import the interface

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={candidate.login} width="100" />
      <h2>{candidate.name || candidate.login}</h2>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
    </div>
  );
};

export default CandidateCard;
