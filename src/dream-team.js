module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let intermediate, result = [];
  members.forEach(e => {
    if (typeof e === 'string') {
      intermediate = e.trim();
      result.push(intermediate[0].toUpperCase());
    }
  });
  return result.sort().join('');
}; 
