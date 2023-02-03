import { useAuth0 } from "@auth0/auth0-react";
import { devNull } from "os";

export const HOST =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "null";

export const useApiAgent = () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const apiAgent = async (params: {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: any;
    outerMember?: boolean;
  }) => {
    const headers = new Headers()
    let token = ''
    try { // Login直後まだLoading中だとここでエラーが出る
      token = params.outerMember ? '' : await getAccessTokenSilently()
    } catch (e: any) {
      if (e.error === 'login_required') {
        loginWithRedirect();
      }
      if (e.error === 'consent_required') {
        loginWithRedirect();
      }
      throw e;
    }
    headers.append('authorization', `Bearer ${token}`)

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
