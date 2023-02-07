import { useAuth0 } from "@auth0/auth0-react";
import { serialize } from 'object-to-formdata';
import { HOST } from '@/resources/constants';

interface CsrfData {
  token: string;
  status: string;
}

const getToken = async (): Promise<CsrfData> => {
  const url = HOST + "/csrf/"
  const response = await fetch(url, {
    credentials: "include"
  })

  return response.json()
}

export const useApiAgent = () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const apiAgent = async (params: {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: any;
    outerMember?: boolean;
  }) => {
    const headers = new Headers()
    const csrfData = await getToken()
    headers.append('X-CSRF-Token', csrfData.token)
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
    const response = await fetch(url, {
      method: params.method,
      headers,
      body: params.method === 'GET' ? null : serialize(params.data || {}),
      credentials: "include",
    });

    return response
  }

  return apiAgent;
}
