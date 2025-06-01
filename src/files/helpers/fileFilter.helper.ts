import { FileFilterCallback } from 'multer';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  if (!file) return callback(null, false);

  const fileExtension = file.mimetype.split('/')[1];

  const validExtension = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtension.includes(fileExtension)) {
    return callback(null, true);
  }

  callback(null, false);
};
