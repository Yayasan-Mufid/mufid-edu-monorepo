import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './objects/ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './objects/ModuleItemStatusInclude.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemStatusWhereUniqueInput.schema';

export const ModuleItemStatusFindUniqueSchema = z.object({
  select: ModuleItemStatusSelectObjectSchema.optional(),
  include: ModuleItemStatusIncludeObjectSchema.optional(),
  where: ModuleItemStatusWhereUniqueInputObjectSchema,
});
