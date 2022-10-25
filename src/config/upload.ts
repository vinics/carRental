import multer from 'multer';
import crypto from 'node:crypto';
import { resolve as pathResolve } from 'node:path';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: pathResolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
