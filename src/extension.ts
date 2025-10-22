import * as vscode from 'vscode';
import { activate as activateAccentPicker } from './modules/accentButton'

export function activate(context: vscode.ExtensionContext): void {
	activateAccentPicker(context);
}