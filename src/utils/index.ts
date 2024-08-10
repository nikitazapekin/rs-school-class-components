// app/utils.ts
const sleep = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));
  
  export { sleep }