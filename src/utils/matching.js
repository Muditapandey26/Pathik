/**
 * Matching Utility for Pathik
 * 
 * This module provides functions to rank volunteer tasks based on 
 * volunteer profiles using a weighted scoring algorithm.
 */

/**
 * Scoring weights for different criteria
 */
const MATCH_WEIGHTS = {
  SKILL_MATCH: 50,    // Primary driver: matching skills
  CITY_MATCH: 20,     // Secondary driver: same city
  PINCODE_MATCH: 15,  // Tertiary driver: same neighborhood
  URGENCY_BONUS: {
    high: 30,
    medium: 15,
    low: 5
  }
};

/**
 * Calculates a match score for a single task relative to a volunteer's profile.
 * 
 * @param {Object} volunteer - The volunteer profile
 * @param {string[]} volunteer.skills - Array of skills the volunteer has
 * @param {string} volunteer.city - Volunteer's city
 * @param {string} volunteer.pincode - Volunteer's pincode
 * @param {Object} task - The task object
 * @param {string[]} task.requiredSkills - Skills required for the task
 * @param {string} task.city - Task's location city
 * @param {string} task.pincode - Task's location pincode
 * @param {string} task.urgency - Urgency level ('high', 'medium', 'low')
 * @returns {number} The calculated score
 */
export const calculateTaskScore = (volunteer, task) => {
  let score = 0;

  // 1. Skill Match Logic
  // Check for overlap between volunteer skills and task required skills
  if (volunteer.skills && task.requiredSkills) {
    const matchingSkills = task.requiredSkills.filter(skill => 
      volunteer.skills.some(vSkill => vSkill.toLowerCase() === skill.toLowerCase())
    );
    
    // Give points if at least one skill matches, or scale by number of matches
    if (matchingSkills.length > 0) {
      score += MATCH_WEIGHTS.SKILL_MATCH;
      // Small bonus for multiple matching skills
      score += (matchingSkills.length - 1) * 5; 
    }
  }

  // 2. City Match Logic
  if (volunteer.city && task.city && 
      volunteer.city.trim().toLowerCase() === task.city.trim().toLowerCase()) {
    score += MATCH_WEIGHTS.CITY_MATCH;
  }

  // 3. Pincode Match Logic
  if (volunteer.pincode && task.pincode && 
      volunteer.pincode.trim() === task.pincode.trim()) {
    score += MATCH_WEIGHTS.PINCODE_MATCH;
  }

  // 4. Urgency Logic
  const urgencyLevel = (task.urgency || 'low').toLowerCase();
  score += MATCH_WEIGHTS.URGENCY_BONUS[urgencyLevel] || 0;

  return score;
};

/**
 * Ranks an array of tasks based on a volunteer's profile.
 * 
 * @param {Object} volunteer - The volunteer profile
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Sorted array of tasks with an added 'matchScore' property
 */
export const rankTasks = (volunteer, tasks) => {
  if (!volunteer || !tasks || !Array.isArray(tasks)) return [];

  return tasks
    .map(task => ({
      ...task,
      matchScore: calculateTaskScore(volunteer, task)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
};

/**
 * Helper to get the top N matches
 * 
 * @param {Object} volunteer 
 * @param {Array} tasks 
 * @param {number} limit 
 * @returns {Array}
 */
export const getTopMatches = (volunteer, tasks, limit = 5) => {
  return rankTasks(volunteer, tasks).slice(0, limit);
};
