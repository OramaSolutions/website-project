// export const Server_Url = "https://nocode-node.oramasolutions.in/api/v1";
export const Server_Url = "http://localhost:3100/api/v1";


export const SERVER_URL = Server_Url;
export const ENQUIRY_ENDPOINT = "/website/enquiry";

export const getEnquiryUrl = () => `${SERVER_URL}${ENQUIRY_ENDPOINT}`;
