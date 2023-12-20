const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const letters = [];
  for (let i = 0; i <= members.length; i += 1) {
    if (typeof members[i] === 'string') {
      const letter = members[i].trim().substr(0, 1).toUpperCase();
      letters.push(letter);
    }
  }
  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};
