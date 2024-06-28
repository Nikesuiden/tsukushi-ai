import { expect, test } from 'vitest';
import {  noCookieClient } from './apiClient';
import {  GET, POST } from './utils';

test(GET(noCookieClient), async () => {
  const res = await noCookieClient.novel.$get();

  expect(res).toEqual('string');
});

test(POST(noCookieClient.novel), async () => {
  const aozoraUrl = 'https://www.aozora.gr.jp/cards/000879/files/127_15260.html';
  const res = await noCookieClient.novel.$post({ body: { aozoraUrl } })

  expect(typeof res).toEqual('string');

});
