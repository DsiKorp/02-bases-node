import { buildLogger } from "../../src/plugins";
import { logger as winstonLogger } from "../../src/plugins/logger.plugin";


describe('logger.plugin test', () => {
    test('should return a function logger', () => {
        const loggerTest = buildLogger('test');
        expect(loggerTest).toBeDefined();
        expect(typeof loggerTest.log).toBe('function');
        expect(typeof loggerTest.error).toBe('function');

    });

    test('should return a message logger', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = "test message";
        const service = "test service";
        const loggerTest = buildLogger(service);
        loggerTest.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service

            })
        );
    });
});
