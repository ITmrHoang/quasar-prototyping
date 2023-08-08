export function isEmpty(instance) {
  if (!instance) {
    return true;
  } else if (typeof instance == "string") {
    return instance === "null" || instance === "undefined";
  } else if (typeof instance === "object") {
    return Object.keys(objectName).length === 0;
  } else {
    return false;
  }
}
