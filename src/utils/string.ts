export const getFirstName = (fullName: string) => {
  if (!fullName) return "Usuario";
  return fullName.trim().split(/\s+/)[0] || "Usuario";
};
