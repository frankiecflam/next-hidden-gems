function getGemsBySearchTerm(gems, term) {
  return gems.filter((gem) =>
    gem.title.toLowerCase().includes(term.toLowerCase())
  );
}

export default getGemsBySearchTerm;
