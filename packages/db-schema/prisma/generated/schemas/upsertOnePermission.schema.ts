import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';
import { PermissionCreateInputObjectSchema } from './objects/PermissionCreateInput.schema';
import { PermissionUncheckedCreateInputObjectSchema } from './objects/PermissionUncheckedCreateInput.schema';
import { PermissionUpdateInputObjectSchema } from './objects/PermissionUpdateInput.schema';
import { PermissionUncheckedUpdateInputObjectSchema } from './objects/PermissionUncheckedUpdateInput.schema';

export const PermissionUpsertSchema = z.object({
  select: PermissionSelectObjectSchema.optional(),
  include: PermissionIncludeObjectSchema.optional(),
  where: PermissionWhereUniqueInputObjectSchema,
  create: z.union([
    PermissionCreateInputObjectSchema,
    PermissionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PermissionUpdateInputObjectSchema,
    PermissionUncheckedUpdateInputObjectSchema,
  ]),
});
