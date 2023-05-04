class WebAPI {
  connect() {
    console.log("Connect");
  }
  sendRequest() {
    console.log("request");
  }
  disconnect() {
    console.log("disconnect");
  }
}

const webAPI = new WebAPI();

class WebApp {
  start() {
    let api = new WebAPI();
    api.connect();
    api.sendRequest();
    api.disconnect();
  }
}

const webApp = new WebApp();
webApp.start();
