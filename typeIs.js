const typeIs = (input) => {
  if (input === null) return "null";
  if (typeof input !== "object") {
    return typeof input;
  }
  let instanceHolder = new Map([
    ["array", Array],
    ["map", Map],
    ["set", Set],
    ["regexp", RegExp],
    ["weakmap", WeakMap],
    [["weakset", WeakSet]],
    ["date", Date],["error",Error]
  ]);
  for (let i of instanceHolder) {
    if (input instanceof i[1]) return i[0];
  }
  return (typeof input==="object" ? "object" : new Error("Can't find type"))
};

export default typeIs