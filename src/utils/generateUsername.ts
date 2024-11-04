const regexUsername = (fullName: string) => {
  return fullName
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .toLowerCase();
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

export const generateUsername = (fullName: string) => {
  const baseUsername = regexUsername(fullName);
  const randomNumber = generateRandomNumber();
  const uniqueUsername = `${baseUsername}_${randomNumber}`;

  return uniqueUsername;
};
