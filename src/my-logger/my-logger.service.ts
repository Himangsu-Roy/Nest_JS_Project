import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  async logToFile(entry) {
    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'medium',
      timeZone: 'UTC',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '../logs/'))) {
        await fsPromises.mkdir(path.join(__dirname, '../logs/'));
      }
      await fsPromises.appendFile(
        path.join(__dirname, '../logs/log.txt'),
        formattedEntry,
      );
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
    }
  }

  log(message: string, context?: string) {
    const entry = `${context}\t${message}`;
    this.logToFile(entry);
    // add your tailored logic
    super.log(message, context);
  }

  error(message: string, trace: string) {
    const entry = `${trace}\t${message}`;
    this.logToFile(entry);
    // add your tailored logic
    super.error(message, trace);
  }

  //   warn(message: string) {
  //     // add your tailored logic
  //     super.warn(message);
  //   }

  //   debug(message: string) {
  //     // add your tailored logic
  //     super.debug(message);
  //   }

  //   verbose(message: string) {
  //     // add your tailored logic
  //     super.verbose(message);
  //   }

  //   info(message: string) {
  //     // add your tailored logic
  //     super.log(message);
  //   }

  //   setContext(context: string) {
  //     // add your tailored logic
  //     super.setContext(context);
  //   }

  //   static create(context: string) {
  //     return new MyLoggerService(context);
  //   }

  //   static createWithOptions(context: string, options: any) {
  //     return new MyLoggerService(context, options);
  //   }
}
