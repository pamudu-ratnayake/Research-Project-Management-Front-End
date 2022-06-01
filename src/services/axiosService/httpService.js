// import axios from "axios";

import API from "./tokenURL";

function httpService() {

  function getAxios(url) {
    return API({
      url: url,
      method: "GET",
    //   params: params,
    });
  }

  function deleteAxios(url) {
    return API({
      url: url,
      method: "DELETE",
    //   params: params,
    });
  }

  function postAxios(url,values) {
    return API({
      url: url,
      method: "POST",
      // params: params,
      // body: body,
      data: values,
    //   headers: {"Access-Control-Allow-Origin": "*"}
    //   headers: 'Access-Control-Allow-Origin:http://localhost:8080'
    });
  }

  function putAxios(url,values) {
    return API({
      url: url,
      method: "PUT",
      // params: params,
      // body: body,
      data: values,
    });
  }

  return {
    getAxios,
    deleteAxios,
    postAxios,
    putAxios,

  };
}

export default httpService();