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
                        url: 'postgresql://doadmin:AVNS_NOxoNRHrhgFZXFI_24m@db-postgresql-nyc1-57458-do-user-13200332-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require',
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
