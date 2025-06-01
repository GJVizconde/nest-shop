import {
  createParamDecorator,
  InternalServerErrorException,
} from '@nestjs/common';

interface AuthenticatedRequest extends Request {
  rawHeaders: string[];
}

export const RawHeaders = createParamDecorator((data, ctx) => {
  const req = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
  const rawHeaders = req.rawHeaders;

  if (!rawHeaders)
    throw new InternalServerErrorException(`RawHeaders not found(request)`);

  return data ? rawHeaders[data] : rawHeaders;
});
