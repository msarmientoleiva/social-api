const app = require('./server/app');
const { sequelize } = require('./database/db');
const PORT = 3000;

require('./models/User');
require('./models/Publication');
require('./models/Image');

(async () => {
    try{
        await sequelize.sync();
    }
    catch(error){
        console.log(error);
    }

})();

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});