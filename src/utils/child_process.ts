import { exec } from 'child_process';

/* CodeQL (GitHub Code Scanning) should flag the use of `exec` with untrusted input as a "Critical" alert for Command Injection.
 */
export function runUserCommand(userInput: string) {
  exec(`echo ${userInput}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
}