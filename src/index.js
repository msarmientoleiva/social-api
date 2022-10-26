const app = require('./server/app');
const { sequelize } = require('./database/db');
const PORT = 3000;

require('./models/User');

(async () => {
    try{
        await sequelize.sync({ force: true });
    }
    catch(error){
        console.log(error);
    }

})();

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});