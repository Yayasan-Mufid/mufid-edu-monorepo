import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from './objects/PermissionOrderByWithRelationInput.schema';
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';
import { PermissionScalarFieldEnumSchema } from './enums/PermissionScalarFieldEnum.schema';

export const PermissionFindManySchema = z.object({
  select: z.lazy(() => PermissionSelectObjectSchema.optional()),
  include: z.lazy(() => PermissionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PermissionOrderByWithRelationInputObjectSchema,
      PermissionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PermissionWhereInputObjectSchema.optional(),
  cursor: PermissionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PermissionScalarFieldEnumSchema).optional(),
});
