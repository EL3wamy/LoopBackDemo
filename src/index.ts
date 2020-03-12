import {ApplicationConfig} from '@loopback/core';
import {PhonebookApplication} from './application';

export {PhonebookApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new PhonebookApplication(options);
  await app.boot();
  await app.migrateSchema();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
