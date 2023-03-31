import { z } from 'zod';
import { ModuleAdminSelectObjectSchema } from './objects/ModuleAdminSelect.schema';
import { ModuleAdminIncludeObjectSchema } from './objects/ModuleAdminInclude.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './objects/ModuleAdminWhereUniqueInput.schema';

export const ModuleAdminFindUniqueSchema = z.object({
  select: ModuleAdminSelectObjectSchema.optional(),
  include: ModuleAdminIncludeObjectSchema.optional(),
  where: ModuleAdminWhereUniqueInputObjectSchema,
});
