function createLogger() {
    let logs = [];

    return {
        log(message) {
            logs.push(message);
        },

        getLogs() {
            console.log(logs);
        }
    };
}

let logger = createLogger();
logger.getLogs();
logger.log('Какой-нибудь лог');
logger.log('Ещё один лог');
logger.log('И ещё один...');
logger.getLogs();