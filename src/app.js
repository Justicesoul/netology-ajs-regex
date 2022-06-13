export class Validator {
  validateUsername(name) {
    return (
      /^[a-z\d_-]+$/i.test(name) &&
      !/[\d]{4,}/.test(name) &&
      !/^[\d_-]/.test(name) &&
      !/[\d_-]$/.test(name)
    );
  }
}

export const phonePurification = (number) => {
  const regReplaceEights = /^8\s*/;
  const regClear = /\D|\s/g;
  return `+${number.replace(regReplaceEights, '7').replace(regClear, '')}`;
};
