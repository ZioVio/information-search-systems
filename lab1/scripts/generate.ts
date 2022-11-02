import fs from 'fs';
import { faker } from '@faker-js/faker';
import { FILES_COUNT, WORDS_COUNT } from './../src/config';
import { FILES_DIR } from '../src/config';

fs.rmSync(FILES_DIR, { recursive: true, force: true });
fs.mkdirSync(FILES_DIR);

for (let i = 0; i < FILES_COUNT; i++) {
  const fileName = faker.random.word();
  const fileContent = faker.random.words(WORDS_COUNT);
  fs.writeFile(`${FILES_DIR}/${fileName}`, fileContent, () => {});
}
