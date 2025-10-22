import * as vscode from 'vscode';

let accentColorStatusBarItem: vscode.StatusBarItem;

let accentProfiles: Record<string, string> = {
    "Teal": "#04afad",
    "Magenta": "#cb2de0ff"
}

export function activate(context: vscode.ExtensionContext): void {
    activateStatusBarItem(context);
}

function activateStatusBarItem(context: vscode.ExtensionContext): void {
	accentColorStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	context.subscriptions.push(accentColorStatusBarItem);
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	accentColorStatusBarItem.text = "Abobabebebe";
	accentColorStatusBarItem.show();
}
