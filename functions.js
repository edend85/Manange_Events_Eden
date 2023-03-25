const fs = require('node:fs/promises');
const path = require('node:path');

async function create(n,text)
{
    await fs.writeFile(path.join(__dirname, 'files', `file${n}.txt`),text);
    console.log(`file${n}.txt :>> `, `file${n}.txt`);
}
async function Read(n)
{
     return await fs.readFile(path.join(__dirname, 'files', `file${n}.txt`));
     
   
}
async function GetRandNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
async function ConcatFiles()
{
    await fs.unlink(path.join(__dirname, 'files', 'concatTextFile.txt'));
    let rndNum = await GetRandNumber();
    let filename = await Read(rndNum) ;
    await fs.appendFile(path.join(__dirname, 'files', 'stringtxt.txt'),filename);
    await console.log('createing stringtxt.txt');
    await fs.rename(path.join(__dirname, 'files', 'stringtxt.txt'),path.join(__dirname, 'files', 'concatTextFile.txt'))
    await console.log(' file name change Successfully');

}
async function RandAndRead()
{
    try{
        let rndNum = await GetRandNumber();
        console.log('rndNum :>> ', rndNum);
        let filename = await Read(rndNum);
        console.log('filename :>> ', filename.toString());
    }catch(err){
        throw err;
    }
    
}
async function ReadAllFiles()
{
    try{
        for(let i = 1; i <=5;i++){
            let filename = await Read(i);
            console.log(filename.toString());
            console.log('\n**********');
        } 
    }catch(err){
        throw err;
    }

    
}

module.exports = {create,ConcatFiles,RandAndRead,ReadAllFiles};
