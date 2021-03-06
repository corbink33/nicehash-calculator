import { Hash } from "../../hash";
import { Algorithms } from "../../algorithms";

export var coin = {
  name: "365Coin",
  names: [
    "365",
  ],
  NiceHash: {
    hashrate: Hash.TERA,
    id: Algorithms.Keccak,
  },
  WhatToMine: {
    hashrate: 1000 * 1000,
    id: 74,
  },
  enabled: false,
};
