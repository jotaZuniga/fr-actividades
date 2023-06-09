export const randomId = () => Math.floor(Math.random() * 1000);

export const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
};
  
export const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
};