import { createSigner } from 'fast-jwt';
import { COOKIE_NAME } from 'service/constants';
import { expect, test } from 'vitest';
import { createUserClient, noCookieClient } from './apiClient';
import { DELETE, GET, POST } from './utils';

test(GET(noCookieClient), async () => {
  const { userClient, cleanUp } = await createUserClient();
  const res = await userClient.$get();

  expect(res).toEqual('');

  await cleanUp();
});

test(POST(noCookieClient.novel), async () => {
  const { userClient, cleanUp } = await createUserClient();
  const aozoraUrl = 'abc'
  const res = await noCookieClient.novel.$post({ body: { aozoraUrl }})

  expect(res).toEqual(aozoraUrl);

  await cleanUp();
});
