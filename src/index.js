const app = require('./server/app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});