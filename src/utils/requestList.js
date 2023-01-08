import servise from "./myAxios";
import qs from 'qs';

const getMiners = () => {
  return servise({
    url: 'miners',
    method: 'get',
  })
};
const getMinerHistory = (minerId) => {
  return servise({
    url: 'history',
    method: 'get',
    params: {
      minerId,
    },
    transformRequest: [
      (data) => {
        return qs.stringify(data)
      }
    ],
  })
};
const getMinersOfPlanet = (planetId) => {
  return servise({
    url: 'miners',
    method: 'get',
    params: {
      planetId,
    },
    transformRequest: [
      (data) => {
        return qs.stringify(data)
      }
    ],
  })
};
const createMiner = (data) => {
  return servise({
    url: 'miners',
    method: 'post',
    data
  })
}



export {
  getMiners,
  getMinerHistory,
  createMiner,
  getMinersOfPlanet
}