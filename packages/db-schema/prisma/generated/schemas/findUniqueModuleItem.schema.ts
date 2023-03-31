import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './objects/ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './objects/ModuleItemInclude.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './objects/ModuleItemWhereUniqueInput.schema';

export const ModuleItemFindUniqueSchema = z.object({
  select: ModuleItemSelectObjectSchema.optional(),
  include: ModuleItemIncludeObjectSchema.optional(),
  where: ModuleItemWhereUniqueInputObjectSchema,
});
