import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionCreateInputObjectSchema } from './objects/PermissionCreateInput.schema';
import { PermissionUncheckedCreateInputObjectSchema } from './objects/PermissionUncheckedCreateInput.schema';

export const PermissionCreateOneSchema = z.object({
  select: PermissionSelectObjectSchema.optional(),
  include: PermissionIncludeObjectSchema.optional(),
  data: z.union([
    PermissionCreateInputObjectSchema,
    PermissionUncheckedCreateInputObjectSchema,
  ]),
});
