import { useAuth0 } from "@auth0/auth0-react";

export const HOST =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "null";

export const useApiAgent = () => {
  const { getAccessTokenSilently } = useAuth0();

  const apiAgent = async (params: {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: any;
  }) => {
    const headers = new Headers()
    const token = await getAccessTokenSilently();
    headers.append('Authorization', `Bearer ${token}`)

    let url = `${HOST}${params.url}`;
    if (params.data && params.method === "GET") {
      const query = new URLSearchParams(params.data).toString();
      url += `?${query}`;
    }
    console.log(url)
    const response = await fetch(url, {
      method: params.method,
      headers,
      body: params.method === "GET" ? null : params.data || {},
    });

    return response
  }

  return apiAgent;
}
