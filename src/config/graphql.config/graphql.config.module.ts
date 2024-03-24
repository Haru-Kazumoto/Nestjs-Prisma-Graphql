import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InternalServerErrorException, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ErrorCode } from 'src/utils/error-codes';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
            installSubscriptionHandlers: true,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            formatError: (error) => {
                const originalError = error.extensions?.originalError as any;
                
                if(originalError instanceof InternalServerErrorException){
                    return {
                        message: "Internal Server Error",
                        code: ErrorCode.INTERNAL_SERVER_ERROR
                    }
                }

                if (!originalError) {
                    return {
                        message: error.message,
                        code: error.extensions?.code,
                    };
                }

                return {
                    message: originalError.message,
                    code: error.extensions?.code,
                };
            }
        })
    ]
})
export class GraphqlConfigModule { }
