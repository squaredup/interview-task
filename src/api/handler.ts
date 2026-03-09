// somewhere under src/ (e.g. src/api/handler.ts)
import { runUserCommand } from '../utils/child_process';
import express from 'express';

const app = express();
app.get('/run', (req, res) => {
  // req.query.cmd is a recognised taint source
  runUserCommand(String(req.query.cmd));
  res.send('ok');
});

export default app;