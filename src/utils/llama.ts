const getToken = async (): Promise<string | undefined> => {
  const authBody: URLSearchParams = new URLSearchParams({
    username: process.env.NEXT_PUBLIC_LLAMA_ACCESS_USERNAME || "",
    password: process.env.NEXT_PUBLIC_LLAMA_ACCESS_PASSWORD || "",
  });

  try {
    const response = await fetch("/api/auth/token", {
      method: "POST",
      body: authBody,
    });

    if (!response.ok) {
      console.error("Authentication failed:", response.statusText);
      throw new Error("Failed to authenticate");
    }

    const authData = await response.json();

    return authData.access_token;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};

const detectVulnerabilities = async (
  code: string,
  token: string,
): Promise<string | undefined> => {
  const url: string = "/api/generate";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const generateBody = {
    user_message: `${process.env.NEXT_PUBLIC_LLAMA_SCAN_PROMPT}: ${code}`,
    temperature: 0,
    top_p: 0,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(generateBody),
    });

    if (!response.ok) {
      console.log("Request failed:", await response.text());
      return undefined;
    }

    const result: string = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.log(`Request failed due to an exception: ${error}`);
    return undefined;
  }
};

const translateJSON = async (
  json: string | undefined,
  token: string,
): Promise<string> => {
  if (!json) {
    return "error";
  }

  const url: string = "/api/generate";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const generateBody = {
    user_message: `${process.env.NEXT_PUBLIC_LLAMA_TRANSLATE_PROMPT}: ${json}`,
    temperature: 0,
    top_p: 0,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(generateBody),
    });

    if (!response.ok) {
      console.log("Request failed:", await response.text());
      return "error";
    }

    const result: string = await response.text();

    return result;
  } catch (error) {
    console.log(`Request failed due to an exception: ${error}`);
    return "error";
  }
};

const run = async (code: string): Promise<string> => {
  try {
    const token = await getToken();
    if (!token) {
      return "Error: Unable to get token.";
    }

    const json = await detectVulnerabilities(code, token);
    if (!json) {
      return "Error: Unable to detect vulnerabilities.";
    }

    const translatedResponse = await translateJSON(json, token);

    return translatedResponse;
  } catch (error) {
    console.log(`Run function failed: ${error}`);
    return "error";
  }
};

export default run;
