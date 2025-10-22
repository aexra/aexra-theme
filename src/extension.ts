import * as vscode from 'vscode';

// let accentColorStatusBarItem: vscode.StatusBarItem;

// export function activate(context: vscode.ExtensionContext): void {
// 	// Create status bar accent color changer
// 	accentColorStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

// 	// Add subscriptions
// 	context.subscriptions.push(accentColorStatusBarItem);

// 	// Initialize status bar status
// 	updateStatusBarItem();
// }

// function updateStatusBarItem(): void {
// 	accentColorStatusBarItem.text = "Abobabebebe";
// 	accentColorStatusBarItem.show();
// }

export function activate(context: vscode.ExtensionContext) {
	const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	item.text = "Abobabebebe";
	item.show();
	context.subscriptions.push(item);
}
