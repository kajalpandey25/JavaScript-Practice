let QRCode = require("qrcode");

QRCode.toFile(
  "./qr.png",
  "Chal Chal ke dikha yeaaaaa skiirrr purrrrrr",
  {
    color: {
      dark: "#00F",
      light: "#0000",
    },
  },
  function (err) {
    if (err) throw err;
    console.log("done");
  }
);
