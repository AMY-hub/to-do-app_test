export const generateId = () => {
    return Math.trunc(Math.random() * new Date().getSeconds()) + '' + Math.random().toString().slice(8);
};
