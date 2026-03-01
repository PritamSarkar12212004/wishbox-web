const deleteData = ({ key }: { key: string }) => {
  localStorage.removeItem(key);
};
export default deleteData;