import { exec } from 'child_process';

/**
 * This function is intentionally vulnerable to Command Injection.
 * CodeQL (GitHub Code Scanning) should flag the use of `exec` 
 * with a variable that could contain malicious commands.
 */
export function runUserCommand(userInput: string) {
  // Vulnerability: `userInput` is passed directly to the shell.
  // An attacker could provide "ls; rm -rf /" to execute arbitrary commands.
  exec(`echo ${userInput}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
}