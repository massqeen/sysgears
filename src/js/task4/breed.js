import getRandInt from './getRandInt';

const breed = (obj1, obj2) => {
  let cutPoint1 = getRandInt(0, obj1.mainThruster.length - 1);
  let cutPoint2 = getRandInt(0, obj2.secondThruster.length - 1);

  const mainThruster = obj1.mainThruster
    .slice(0, cutPoint1)
    .concat(obj2.mainThruster.slice(cutPoint1));
  const secondThruster = obj2.secondThruster
    .slice(0, cutPoint2)
    .concat(obj1.secondThruster.slice(cutPoint2));
  return { mainThruster, secondThruster };
};

export default breed;
