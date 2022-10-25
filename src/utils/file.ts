import { stat, unlink } from 'node:fs/promises';

export const deleteFile = async (fileName: string) => {
  try {
    await stat(fileName);
  } catch {
    return;
  }

  await unlink(fileName);
};
