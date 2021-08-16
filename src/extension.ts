import * as vscode from 'vscode';
import { removeInvalidCodeEntry } from './handlers';
import { INVALID_TYPE_MAP } from './configs';

export function activate(context: vscode.ExtensionContext) {
	
	const removeConsole = vscode.commands.registerCommand('invalid-code-remover.removeConsole', (params) => {
    const isSuccess = removeInvalidCodeEntry(params.fsPath, INVALID_TYPE_MAP.get('CONSOLE'));
    if(isSuccess) {
      vscode.window.showInformationMessage('remove console success!');
    } else {
      vscode.window.showErrorMessage('remove console failed!');
    }
	});

	const removeDebugger = vscode.commands.registerCommand('invalid-code-remover.removeDebugger', (params) => {
    const isSuccess = removeInvalidCodeEntry(params.fsPath, INVALID_TYPE_MAP.get('DEBUGGER'));
    if(isSuccess) {
		  vscode.window.showInformationMessage('remove debugger success!');
    } else {
      vscode.window.showErrorMessage('remove debugger failed!');
    }
	});

	context.subscriptions.push(...[removeConsole, removeDebugger]);
}

export function deactivate() {}
