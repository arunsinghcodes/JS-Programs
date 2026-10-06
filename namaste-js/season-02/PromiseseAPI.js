const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success!!");
  }, 3000);
});

const P2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P2 Success!");
  //   }, 2000);
  setTimeout(() => {
    reject("P2 Fail!!");
  }, 2000);
});

const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success!!");
  }, 1000);
});

Promise.all([P1, P2, P3])
  .then((res) => {
    console.log("All", res);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([P1, P2, P3])
  .then((res) => {
    console.log("AllSettled", res);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([P1, P2, P3])
  .then((res) => {
    console.log("Race", res);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.any([P1, P2, P3])
  .then((res) => {
    console.log("Any ", res);
  })
  .catch((error) => {
    console.error(error);
  });
