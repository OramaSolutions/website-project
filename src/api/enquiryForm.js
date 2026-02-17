import { getEnquiryUrl } from "../config";

export const submitEnquiryForm = async (payload) => {
  const response = await fetch(getEnquiryUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = "Failed to submit enquiry";

    try {
      const data = await response.json();
      if (data?.message) {
        errorMessage = data.message;
      }
    } catch {
      // Ignore non-JSON error responses.
    }

    throw new Error(errorMessage);
  }

  return response;
};
