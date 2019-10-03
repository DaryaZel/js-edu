/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus,
  knowsProgramming,
  config
) {
  const hours = 800
  const overHours = 500
  if (knowsProgramming) {
    return Math.ceil(hours / config[focus])
  }
  else {
    return Math.ceil((hours + overHours) / config[focus])
  }
};
