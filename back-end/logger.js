const logger = require('logger').createLogger('development.log'); // logs to a file

logger.info('loading an array', [1,2,3], 'now!');
logger.debug('this wont be logged');

logger.setLevel('debug');
logger.debug('this will be logged now');



