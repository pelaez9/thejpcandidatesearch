const GITHUB_API_URL = 'https://api.github.com/search/users';
const token = import.meta.env.VITE_GITHUB_TOKEN; // Use your GitHub token from .env

// Function to generate a random letter from A-Z
const getRandomLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters[Math.floor(Math.random() * letters.length)];
};

// Function to fetch a random GitHub candidate
export const getGitHubCandidate = async () => {
  try {
    const randomLetter = getRandomLetter();
    const response = await fetch(`${GITHUB_API_URL}?q=${randomLetter}&per_page=1`, {
      headers: {
        Authorization: `token ${token}`, // Use GitHub token
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch candidate');
    }

    const data = await response.json();
    const candidate = data.items[0]; // Get the first user in the result set
    return candidate;
  } catch (error) {
    console.error('Error fetching candidate:', error);
    throw new Error('Error fetching candidate');
  }
};
