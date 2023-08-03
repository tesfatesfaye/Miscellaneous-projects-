const typeIs = (input) => {
  if (input === null) return "null";
  if (typeof input !== "object") {
    return typeof input;
  }
  let type = (input?.constructor?.name).toLowerCase();
  return type ?? new Error("unknownType");
};

export default typeIs