const { atom, selector } = require("recoil");

const respuestasState = atom({
  key: "respuestasState",
  default:  [-1, -1, -1, -1, -1, -1, -1 ,-1,-1,-1,-1, -1, -1, -1, -1, ]
});



export {respuestasState}
