import {CrudRequest} from "@crud/core";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Main_Base} from "../Constant/Variable";
import {store} from "../Redux/Store";
export class CrudFactory extends CrudRequest {
  dateFormat = "MMMM Do YYYY hh:mm A";
  baseUrl = Main_Base;

  getUrl = (...segments) => segments.reduce((url, segment) => url + segment, this.baseUrl);

  async retrieve(url, data = {}, requestOptions = {}) {
    return this.send({
      method: "GET",
      // url: `retrieve/${url}`,
      url: `${url}`,
      data,
      ...requestOptions,
    });
  }

  async post(url, data = {}, requestOptions = {}) {
    return this.send({
      method: "POST",
      url: `${url}`,
      data,
      ...requestOptions,
    });
  }
  async put(url, data = {}, requestOptions = {}) {
    return this.send({
      method: "PUT",
      url: `${url}`,
      data,
      ...requestOptions,
    });
  }

  async delete(url, data = {}, requestOptions = {}) {
    return this.send({
      method: "DELETE",
      url,
      data,
      ...requestOptions,
    });
  }

  async send(requestOptions = {}) {
    const {url, data, method, notify = true} = requestOptions;
    const options = {
      ...requestOptions.ajaxOptions,
      method,
    };

    let fullUrl;
    const token = await store.getState().token.token.token;
    const CustomerToken = "Bearer " + token;
    options.headers = {
      ...options.headers,
      Accept: "application/json",
      Authorization: CustomerToken,
      extraHeaders: {"ngrok-skip-browser-warning": true},
    };

    if (!(data instanceof FormData)) {
      options.headers["Content-Type"] = "application/json";
    }

    fullUrl = this.getUrl(url);

    if (options.method === "GET") {
      const queryString = new URLSearchParams(data);
      fullUrl += `?${queryString}`;
    } else if (data instanceof FormData) {
      options.body = data;
    } else {
      options.body = JSON.stringify(data);
    }

    let res = {
      data: [],
      message: "",
      type: "error",
      errors: [],
    };

    try {
      this.call("loading", [true]);
      const response = await fetch(fullUrl, options);
      if (response.status === 200) {
        res = await response.json();
        const {type, message} = res;
        if (options.method !== "GET" && notify) {
          this.notify({
            message,
            type,
          });
        }
      } else {
        // no inspection ExceptionCaughtLocallyJS
        throw new Error(`${response.status} : ${response.statusText}`);
      }
    } catch (e) {
      this.call("loading", [false]);
      console.error(e);
      this.notify({
        message: e.message,
        type: "error",
      });
      throw e;
    } finally {
      this.call("loading", [false]);
    }

    const {type} = res;

    if (type === "error") throw res;

    return res;
  }
}

export const $crud = new CrudFactory();
