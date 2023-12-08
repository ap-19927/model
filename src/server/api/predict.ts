//https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
import { spawn } from "child_process";

const waitMilliseconds = 8000;
export default defineEventHandler( async (event) => {
  const filename = getQuery(event).name;
  const pythonProcess = spawn("python3",["src/public/python/predict.py", filename]);

  const stdoutAsyncWrapper = async () => {
    let predictionAccumulation = "";
    const dataPromise = new Promise((resolve, reject) => {
      pythonProcess.stdout.on("data", (data) => {
        predictionAccumulation += data.toString();
      })
      setTimeout(() => { resolve(predictionAccumulation) }, waitMilliseconds);
    });
    const result = await dataPromise;
    return result;
  };
  const prediction = await stdoutAsyncWrapper();

  pythonProcess.stderr.on("data", (data) => {
    console.log(`python error: ${data.toString()}`);
  });
  pythonProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  return {
    predict: prediction.match(/\(.+\)/g,"\$&")[0],
  }
});
