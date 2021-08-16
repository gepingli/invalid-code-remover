import { UN_MATCH, INVALID_TYPE_MAP, EXCLUDE_DIR_NAME, EXCLUDE_FILE_EXTNAME } from '../configs';
import { lstatSync, readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, basename, extname } from 'path';

function isDir(path: string): boolean {
  const stat = lstatSync(path);
  return stat.isDirectory();
}

export function removeInvalidCodeEntry(path: string, type: number = UN_MATCH): boolean {
  if (type === UN_MATCH) {
    return false;
  }
  if (!existsSync(path)) {
    return false;
  }
  try {
    if (isDir(path)) {
      if(EXCLUDE_DIR_NAME.has(basename(path))) {
        return true;
      }
      const files = readdirSync(path);
      files.forEach((file: any) => {
        const subPath = join(path, file);
        removeInvalidCodeEntry(subPath, type);
      });
    } else {
      if(EXCLUDE_FILE_EXTNAME.has(`.${extname(path)}`)) {
        return true;
      }
      const fileOptions = { encoding: 'utf-8' as BufferEncoding };
      const content = readFileSync(path, fileOptions);
      const lines = content.split('\n');
      const handledLines = [];
      for (const line of lines) {
        let handledLine = '';
        switch (type) {
          case (INVALID_TYPE_MAP.get("CONSOLE")):
            handledLine = line.replace(/console\..*\(.*\)( )*;?/g, '');
            break;
          case (INVALID_TYPE_MAP.get("DEBUGGER")):
            handledLine = line.replace(/debugger( )*;?/g, '');
            break;
          default:
            handledLine = line;
            break;
        }
        if (handledLine === line || !/^( )*$/.test(handledLine)) {
          handledLines.push(handledLine);
        }
      }
      let handledContent = handledLines.join('\n');
      if (handledContent !== content) {
        writeFileSync(path, handledContent, fileOptions);
      }
    }
    return true;
  } catch(err) {
    return false;
  }
}