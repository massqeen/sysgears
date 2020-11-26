const extendFactors = (factors, extraFactors) => {
  extraFactors.forEach((value, key) => factors.set(key, value));
  return factors;
};

export default extendFactors;
