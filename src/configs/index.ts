export const UN_MATCH = 0;

export const INVALID_TYPE_MAP = new Map([
    ['CONSOLE', 1],
    ['DEBUGGER', 2]
]);

export const EXCLUDE_DIR_NAME:Set<string> = new Set([
    'public',
    'dist',
    'node_modules',
    'docs',
    'test',
]);
export const EXCLUDE_FILE_EXTNAME:Set<string> = new Set([
    'css',
    'sass',
    'less',
    'md',
    'lock',
    'json',
    'yarnrc',
    'svg',
    'png',
    'gitignore',
    'vscodeignore',
    ''
]);