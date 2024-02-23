import fs from "fs";

const fsPromise = fs.promises;

async function log(logData){
    try {
        logData = `\n ${new Date().toString()} + ". LogData: " + ${logData}`;
        await fsPromise.appendFile("log.txt", logData);

    } catch (err) {
        console.log(err);
    }
}
// wrapping this inside a MIDDLEWARE
const loggerMiddleware = async (req, res , next) => {
    //1 . Log request body
    if(!req.url.includes('signIn')){
        let data = JSON.stringify(req.body) + req.url;
        await log(data);
    }
    next();
}
export default loggerMiddleware;