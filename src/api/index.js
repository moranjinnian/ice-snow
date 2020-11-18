import axios from "axios";

// 首页
export const showLiveList = params => {
    return axios.post( '/api/home/index/showLiveList', params).then(res => res);
};
