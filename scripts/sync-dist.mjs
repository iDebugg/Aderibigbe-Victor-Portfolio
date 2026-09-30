import { cp, access, rm } from 'node:fs/promises';

const source = new URL('../out/', import.meta.url);
const destination = new URL('../dist/', import.meta.url);
// Only replace generated output after a successful, complete export.
await access(new URL('index.html', source));
await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
console.log('Static export synchronized to dist/');
