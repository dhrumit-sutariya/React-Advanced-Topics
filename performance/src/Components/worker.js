onmessage = (e) => {
  console.log("on msg");
  try {
    let result = e.data;
    for (let i = 0; i <= 10; i++) {
      result = i * i * i;
    }
    // console.log(result);
    postMessage(result);
  } catch (err) {
    console.log("err");
  }
};
