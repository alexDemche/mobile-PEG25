export function getUserLevelByPoints(levels, points) {
  for (let i = 0, len = levels.length; i < len; i += 1) {
    if (points <= levels[i].toPoints) {
      return levels[i];
    }
  }

  return levels[levels.length - 1];
}
