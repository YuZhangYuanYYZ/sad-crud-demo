export function validateName(itemName: string): boolean {
  const reg = /^[0-9a-zA-Z-/]+$/;
  return reg.test(itemName);
}
