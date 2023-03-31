import { z } from 'zod';
import { ModuleItemSelectObjectSchema } from './objects/ModuleItemSelect.schema';
import { ModuleItemIncludeObjectSchema } from './objects/ModuleItemInclude.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './objects/ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateInputObjectSchema } from './objects/ModuleItemCreateInput.schema';
import { ModuleItemUncheckedCreateInputObjectSchema } from './objects/ModuleItemUncheckedCreateInput.schema';
import { ModuleItemUpdateInputObjectSchema } from './objects/ModuleItemUpdateInput.schema';
import { ModuleItemUncheckedUpdateInputObjectSchema } from './objects/ModuleItemUncheckedUpdateInput.schema';

export const ModuleItemUpsertSchema = z.object({
  select: ModuleItemSelectObjectSchema.optional(),
  include: ModuleItemIncludeObjectSchema.optional(),
  where: ModuleItemWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemCreateInputObjectSchema,
    ModuleItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemUpdateInputObjectSchema,
    ModuleItemUncheckedUpdateInputObjectSchema,
  ]),
});
