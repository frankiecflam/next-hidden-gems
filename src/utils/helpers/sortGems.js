import getCategoryNameById from "./getCategoryNameById";

function sortGems(gems, criterion = "DATE", categories) {
  let sortedGems;
  switch (criterion) {
    case "CATEGORY":
      sortedGems = gems.sort((a, b) => {
        const gemACategory = getCategoryNameById(categories, a.category).slice(
          0,
          1
        );
        const gemBCategory = getCategoryNameById(categories, b.category).slice(
          0,
          1
        );

        if (gemACategory > gemBCategory) {
          return 1;
        }

        if (gemACategory < gemBCategory) {
          return -1;
        }

        return 0;
      });

      return sortedGems;

    case "DATE":
    default:
      sortedGems = gems.sort((a, b) => {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);

        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }

        return 0;
      });

      return sortedGems;
  }
}

export default sortGems;
