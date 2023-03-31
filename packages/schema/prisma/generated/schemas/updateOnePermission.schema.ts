import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionUpdateInputObjectSchema } from './objects/PermissionUpdateInput.schema';
import { PermissionUncheckedUpdateInputObjectSchema } from './objects/PermissionUncheckedUpdateInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';

export const PermissionUpdateOneSchema = z.object({
  select: PermissionSelectObjectSchema.optional(),
  include: PermissionIncludeObjectSchema.optional(),
  data: z.union([
    PermissionUpdateInputObjectSchema,
    PermissionUncheckedUpdateInputObjectSchema,
  ]),
  where: PermissionWhereUniqueInputObjectSchema,
});
