

export const useViewModal = () => {
  const sayHi = "Hello world !";
  const sayWelcome = () => {
    console.log('hello world');
    let a = -10;
    let b = 20;
    return a + b;
  }
  const fetchAll = () => { }
    return {
      sayHi,
      sayWelcome,
      fetchAll
    }
}