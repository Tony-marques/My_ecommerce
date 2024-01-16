export const getLocalStorage = (item: string) => {
   return JSON.parse(localStorage.getItem(item)!) || [];
};

export const saveToLocalStorage = (array: [], payload = null) => {
   if (payload) {
      array.push(payload);
   }
   localStorage.setItem("products", JSON.stringify(array));
};
