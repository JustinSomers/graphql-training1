import fetch, { RequestInfo, RequestInit, Response } from 'node-fetch';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

async function httpFetch<T>(
  request: RequestInfo,
  options: RequestInit,
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    request,
    options,
  );
  response.parsedBody = await response.json();
  return response;
}

export default httpFetch;
