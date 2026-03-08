// GitHub API data for your projects
// Replace 'prakratigupta76' with your actual GitHub username

const GITHUB_USERNAME = 'prakratigupta76';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

async function fetchGitHubProjects() {
    try {
        const response = await fetch(GITHUB_API_URL);
        const repos = await response.json();
        
        // Filter and map repositories
        return repos
            .filter(repo => !repo.fork) // Exclude forked repos
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 12) // Get top 12 projects
            .map(repo => ({
                title: repo.name,
                description: repo.description || 'No description',
                url: repo.html_url,
                language: repo.language || 'Other',
                stars: repo.stargazers_count,
                category: categorizeProject(repo.name, repo.description, repo.language)
            }));
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

function categorizeProject(name, description, language) {
    const desc = `${name} ${description}`.toLowerCase();
    
    if (desc.includes('ml') || desc.includes('machine learning') || desc.includes('prediction') || desc.includes('model')) {
        return 'ml';
    }
    if (desc.includes('dashboard') || desc.includes('visualization') || desc.includes('bi')) {
        return 'dashboard';
    }
    if (desc.includes('nlp') || desc.includes('text') || desc.includes('language') || desc.includes('chatbot')) {
        return 'nlp';
    }
    if (language === 'Python') return 'ml';
    if (language === 'JavaScript' || language === 'HTML') return 'dashboard';
    return 'ml';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchGitHubProjects };
}
