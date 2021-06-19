function requestValidator(httpObj) {
  validateMethod(httpObj);
  validateUri(httpObj);
  validateVersion(httpObj);
  validateMessage(httpObj);

  return httpObj;

  function validateMethod(httpObj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let propName = "method";

    if (httpObj[propName] === undefined || !validMethods.includes(httpObj[propName])) {
      throw new Error("Invalid request header: Invalid Method");
    }
  }

  function validateUri(httpObj) {
    let validUri = /^[\w\.]+$/;
    let propName = "uri";

    if (httpObj[propName] === undefined || !validUri.test(httpObj[propName])) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  function validateVersion(httpObj) {
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let propName = "version";

    if (httpObj[propName] === undefined || !validVersions.includes(httpObj[propName])) {
      throw new Error("Invalid request header: Invalid Version");
    }
  }

  function validateMessage(httpObj) {
    let validMessage = /^[^<>\\&'"]*$/;
    let propName = "message";

    if (httpObj[propName] === undefined || !validMessage.test(httpObj[propName])) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
}

console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);

console.log(
  requestValidator({
    method: "OPTIONS",
    uri: "git.master",
    version: "HTTP/1.1",
    message: "-recursive",
  })
);
