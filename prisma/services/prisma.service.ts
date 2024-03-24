import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel> implements OnModuleInit, OnModuleDestroy {

    private readonly logger = new Logger(PrismaService.name);

    constructor() {
        super({
            log: [
                {
                    emit: 'event',
                    level: 'query',
                },
                {
                    emit: 'event',
                    level: 'error',
                },
                {
                    emit: 'event',
                    level: 'info',
                },
                {
                    emit: 'event',
                    level: 'warn',
                },
            ],
            transactionOptions: {
                isolationLevel: 'Serializable',
                maxWait: 60000,
                timeout: 60000
            },
            errorFormat: 'pretty'            
        });

        this.$on('error', ({ message }) => {
            this.logger.error(message);
        });
        this.$on('warn', ({ message }) => {
            this.logger.warn(message);
        });
        this.$on('info', ({ message }) => {
            this.logger.debug(message);
        });
        this.$on('query', ({ query, params }) => {
            this.logger.log(`${query}; ${params}`);
        });
    }

    async onModuleInit() {
        await this.$connect();
    
        
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}