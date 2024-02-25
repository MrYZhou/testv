import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "testv" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('testv.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from testv!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
