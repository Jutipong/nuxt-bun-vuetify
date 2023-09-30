export const useGlobal = () => {
  const counter = useState('globalState', () => 0);

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  return {
    counter,
    increment,
    decrement,
  };
};
