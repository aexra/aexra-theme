import { window, commands, ExtensionContext, StatusBarItem, StatusBarAlignment } from 'vscode';

let accentColorStatusBarItem: StatusBarItem;

let accentProfiles: Record<string, string> = {
    "Teal": "#04afad",
    "Magenta": "#cb2de0ff"
};

let accentColor: string = "Teal";

export function activate(context: ExtensionContext): void {
    activateStatusBarItem(context);
    activatePicker(context);
};

function activateStatusBarItem(context: ExtensionContext): void {
	accentColorStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 100);
	context.subscriptions.push(accentColorStatusBarItem);
	updateStatusBarItem();
};

function activatePicker(context: ExtensionContext): void {
    context.subscriptions.push(commands.registerCommand('aexra.themes.selectAccent', async () => {
        const options: Record<string, (context: ExtensionContext) => Promise<void>> = 
            Object.fromEntries(
                Object.keys(accentProfiles).map(
                (profileName) => [
                    profileName,
                    async (context: ExtensionContext) => {
                        selectAccentColor(context, profileName);
                    }
                ] as const
            )
        );
		const quickPick = window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({ label }));
		quickPick.onDidChangeSelection(selection => {
			if (selection[0]) {
				options[selection[0].label](context)
					.catch(console.error);
                quickPick.hide();
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	}));
};

function updateStatusBarItem(): void {
	accentColorStatusBarItem.text = "Abobabebebe";
	accentColorStatusBarItem.show();
};

function selectAccentColor(context: ExtensionContext, key: string): void {
    try {
        let color: string = accentProfiles[key];
        window.showInformationMessage(`You've just selected a new accent color: ${key} (${color})`);
    } catch {
        window.showErrorMessage(`No accent color found by key '${key}'`);
    }
};
