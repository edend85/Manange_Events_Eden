const {create,ConcatFiles,RandAndRead,ReadAllFiles} = require('./functions');
const {EventHandler} = require('./models/EventHandler');

function Main() {

    //create(1,'Hello World');
    //ConcatFiles();

    let Ehandler = new EventHandler();

    setTimeout(() => {
    Ehandler.on('readFile', RandAndRead);
    Ehandler.emit('readFile',RandAndRead);
    }, 1000 * 5)
    console.log('\n');
    setTimeout(() => {
    Ehandler.on('endProgram', ReadAllFiles);
    Ehandler.emit('endProgram',ReadAllFiles);
    }, 1000 * 10)
}

Main();