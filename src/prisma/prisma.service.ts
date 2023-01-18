import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService 
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
        constructor() {
            super({
                datasources: {
                    db: {
                        url: 'postgresql://postgres:123456@db:5432/nestjs',
            },
        },
    });
        }

        async onModuleInit() {
            await this.$connect();
        }
        async onModuleDestroy() {
            await this.$disconnect();
        }
    }
