const app = require('./src/app');
const logger = require('./src/utils/logger');

const port = process.env.PORT || 5001;

app.listen(port, () => {
  logger.info(`Server is running on port: ${port}`);
});