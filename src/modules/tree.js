const R = require("ramda");

const getEmptyTree = () => {
  return {
    rootNode: { name: "" },
  };
};

const updateTreeName = (tree, name) => {
  return R.merge(tree,{rootNode: {name: name}});
};

const getEmptyCharacter = () => {
  return { name: "", id: Math.random().toString(), gender: "Male", relations: [] };
};

const findCharacter = (tree, character) => {
  return tree[character.name];
};

const addOrUpdateCharacter = (tree, element) => {
  return R.assoc(element.id, element, tree);
};

const deleteCharacter = (tree, element) => {
  return R.assoc(element.id, undefined, tree);
};

export {
  getEmptyTree,
  updateTreeName,
  getEmptyCharacter,
  findCharacter,
  addOrUpdateCharacter,
  deleteCharacter,
};
