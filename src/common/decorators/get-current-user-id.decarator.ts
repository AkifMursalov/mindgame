import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const getCurrentUserId = createParamDecorator(
    (_data:undefined, context: ExecutionContext):number => {
        const request = context.switchToHttp().getRequest();
        return request.user['sub'];
    },
);


