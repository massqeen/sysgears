const sortObjsByNumber = (objs, param) => {
  const arr = [...objs].sort((obj1, obj2) => obj1[param] - obj2[param]);
  console.log('numbers', arr);
  return arr;
};

export default sortObjsByNumber;
