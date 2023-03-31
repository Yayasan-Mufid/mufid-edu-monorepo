import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';

export const PermissionFindUniqueSchema = z.object({
  select: PermissionSelectObjectSchema.optional(),
  include: PermissionIncludeObjectSchema.optional(),
  where: PermissionWhereUniqueInputObjectSchema,
});
