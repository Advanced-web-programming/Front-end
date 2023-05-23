import { atom } from "recoil";

export const projectRefAtom = atom({
  key: "projectRefAtom", 
  default: {
    ref: null,
    refEvent: null
  }
});

export const informationRefAtom = atom({
  key: "informationRefAtom", 
  default: {
    ref: null,
    refEvent: null
  }
});

export const orderRefAtom = atom({
  key: "orderRefAtom", 
  default: {
    ref: null,
    refEvent: null
  }
});

export const currentUrl = atom({
  key: "currentUrl",
  default: "/"
})

export const showLogin = atom({
  key: "showLogin",
  default: false
})

export const fileAtom = atom({
  key: "fileListAtom",
  default: [
    
  ]
})