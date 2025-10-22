import * as vscode from 'vscode';

let accentColorStatusBarItem: vscode.StatusBarItem;

let accentProfiles: Record<string, string> = {
	"Teal": "#04afad",
	"Magenta": "#cb2de0ff"
}

export function activate(context: vscode.ExtensionContext): void {
	// Create status bar accent color manager (it will override the selected theme's accent color)
	accentColorStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

	// Add subscriptions
	context.subscriptions.push(accentColorStatusBarItem);

	// Initialize status bar status
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	accentColorStatusBarItem.text = "Abobabebebe";

	accentColorStatusBarItem.show();
}
