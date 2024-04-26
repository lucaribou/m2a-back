import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          return cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file) {
    return { filename: file.filename };
  }

  @Get('files')
  async getFiles(): Promise<string[]> {
    const directoryPath = './uploads'; // Remplacez cela par le chemin de votre dossier
    try {
      const files = await fs.promises.readdir(directoryPath);
      console.log(files);
      return files;
    } catch (error) {
      throw new Error(
        `Impossible de lire les fichiers du dossier : ${error.message}`,
      );
    }
  }
}
