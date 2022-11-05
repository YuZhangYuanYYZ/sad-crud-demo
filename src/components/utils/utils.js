export function validateName(itemName) {
  const reg = /^[0-9a-zA-Z-/]+$/;
  console.log('itemName111111', itemName, reg.test(itemName));

  return reg.test(itemName);
}
