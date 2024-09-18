import { useState, useEffect } from 'react';
import { getGitHubCandidate } from '../api/API';
import CandidateCard from './CandidateCard'; // Assuming this component exists
import { Candidate } from '../interfaces/interfaces'; // Assuming this interface exists

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGitHubCandidate(); // Fetch a random candidate
      setCandidate(data); // Set candidate data to state
    } catch (err) {
      setError('Failed to fetch candidate');
    } finally {
      setLoading(false);
    }
  };

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates)); // Save to localStorage
      fetchCandidate(); // Fetch new candidate
    }
  };

  const skipCandidate = () => {
    fetchCandidate(); // Fetch new candidate without saving
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="main-page">
      {candidate && (
        <div>
          <CandidateCard candidate={candidate} />
          {/* Apply the save-button and skip-button classes */}
          <button className="save-button" onClick={saveCandidate}>Save</button>
          <button className="skip-button" onClick={skipCandidate}>Skip</button>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
