var i = 1

function resolveAfter2Seconds() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved "+i++);
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");

  var cx = await resolveAfter2Seconds()
    .then<Promise<string>>((str) => {
      placeDash();
      console.log("Entered success block 0");
      console.log(str);
      return resolveAfter2Seconds();
    })
    .then((str) => {
      placeDash();
      console.log("Entered success block 1");
      console.log(str);
      return "abhijith";
    })
    .catch((err) => {
      placeDash();
      console.log("Catch block enterd");
      placeDash();
    });

    console.log("Finally task finished "+cx)
}
asyncCall();

function placeDash() {
  console.log("---------------------------------------------");
}
