// generate a ltree from a category

type categoryDto = {
  id: string;
  name: string;
  pid: string | null;
};

type categoryTreeDto = {
  id: string[];
  name: string[];
  pid: (string | null)[];
};

export const categoriesLtree = (
  categories: categoryDto[]
) => {
  let newCategoriesArray: categoryTreeDto[] = [];

  categories.map((category: categoryDto) => {
    // 1st level
    // Projects
    if (category.pid === null) {
      newCategoriesArray.push({
        id: [category.id],
        name: [category.name],
        pid: category.pid ? [category.pid] : [null],
      });
    }
  });

  const newCategoriesArrayLoop = newCategoriesArray;

  // 2nd level
  // Projects - Virtual
  newCategoriesArrayLoop.map(
    (category: categoryTreeDto) => {
      categories.map((child: categoryDto) => {
        if (category.id[0] === child.pid) {
          newCategoriesArray.push({
            id: [category.id[0], child.id],
            name: [category.name[0], child.name],
            pid: child.pid
              ? [null, child.pid]
              : [null, null],
          });
        }
      });
    }
  );

  // 3rd level
  // Projects - Virtual - Streaming
  newCategoriesArrayLoop.map(
    (category: categoryTreeDto) => {
      categories.map((child: categoryDto) => {
        if (category.id[1] === child.pid) {
          newCategoriesArray.push({
            id: [category.id[0], category.id[1], child.id],
            name: [
              category.name[0],
              category.name[1],
              child.name,
            ],
            pid: child.pid
              ? [null, category.pid[1], child.pid]
              : [null, null, null],
          });
        }
      });
    }
  );

  return newCategoriesArray;
};
