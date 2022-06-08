import { useCallback, useState } from "react";

import config from "../config";

// requestConfig = {
//   link,
//   errorMessage,
//   urlParams: [{property: "episode", value: "S01E01", required: true/false}]
// };

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(true);

  // delete baseURL from the new link
  // because charcater API already contains baseURL 
  const prepareLink = (newLink) => {
    return newLink.replace(config.api.baseURL, "");
  };

  const processURLParams = (urlParams) => {
    let queryArr = [];
    if (!urlParams) {
      return "";
    }
    for (let param of urlParams) {
      if (param.required && !param.value) {
        throw new Error(`Value not defined for ${param.property}`);
      }
      queryArr.push(`${param.property}=${param.value}`);
    }
    return "?" + queryArr.join("&");
  };

  const sendRequest = useCallback(
    (requestConfig) => {
      try {
        const url =
          config.api.baseURL +
          prepareLink(requestConfig.link) +
          processURLParams(requestConfig.urlParams);

        setIsLoading(true);

        fetch(url, {
          method: "GET",
        })
          .then((response) => {
            if (!response.ok) {
              return Promise.reject(new Error(requestConfig.errorMessage));
            }
            return response.json();
          })
          .then((data) => {
            applyData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error.message);
            setIsLoading(false);
          });
      } catch (error) {
        // setIsLoading(false);
      }
    },
    [applyData]
  );

  return {
    isLoading,
    sendRequest,
  };
};

export default useHttp;
