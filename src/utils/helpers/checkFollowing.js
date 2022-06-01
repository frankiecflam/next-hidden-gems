function checkFollowing(gemmerId, currentUserFollowing) {
  const following = JSON.parse(currentUserFollowing);

  // Check if gemmerId exists in the array
  const existed = following.filter((id) => id === gemmerId).length > 0;
  return existed;
}

export default checkFollowing;
