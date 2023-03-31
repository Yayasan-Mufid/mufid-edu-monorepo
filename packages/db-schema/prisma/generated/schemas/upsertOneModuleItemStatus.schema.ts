import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './objects/ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './objects/ModuleItemStatusInclude.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusCreateInputObjectSchema } from './objects/ModuleItemStatusCreateInput.schema';
import { ModuleItemStatusUncheckedCreateInputObjectSchema } from './objects/ModuleItemStatusUncheckedCreateInput.schema';
import { ModuleItemStatusUpdateInputObjectSchema } from './objects/ModuleItemStatusUpdateInput.schema';
import { ModuleItemStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemStatusUncheckedUpdateInput.schema';

export const ModuleItemStatusUpsertSchema = z.object({
  select: ModuleItemStatusSelectObjectSchema.optional(),
  include: ModuleItemStatusIncludeObjectSchema.optional(),
  where: ModuleItemStatusWhereUniqueInputObjectSchema,
  create: z.union([
    ModuleItemStatusCreateInputObjectSchema,
    ModuleItemStatusUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ModuleItemStatusUpdateInputObjectSchema,
    ModuleItemStatusUncheckedUpdateInputObjectSchema,
  ]),
});
