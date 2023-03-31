import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './objects/ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './objects/ModuleItemInclude.schema';
import { ModuleItemUpdateInputObjectSchema } from './objects/ModuleItemUpdateInput.schema';
import { ModuleItemUncheckedUpdateInputObjectSchema } from './objects/ModuleItemUncheckedUpdateInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './objects/ModuleItemWhereUniqueInput.schema';

export const ModuleItemUpdateOneSchema = z.object({
  select: ModuleItemSelectObjectSchema.optional(),
  include: ModuleItemIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemUpdateInputObjectSchema,
    ModuleItemUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemWhereUniqueInputObjectSchema,
});
