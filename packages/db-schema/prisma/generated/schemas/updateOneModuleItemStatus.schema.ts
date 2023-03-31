import { z } from 'zod';
import { ModuleItemStatusSelectObjectSchema } from './objects/ModuleItemStatusSelect.schema';
import { ModuleItemStatusIncludeObjectSchema } from './objects/ModuleItemStatusInclude.schema';
import { ModuleItemStatusUpdateInputObjectSchema } from './objects/ModuleItemStatusUpdateInput.schema';
import { ModuleItemStatusUncheckedUpdateInputObjectSchema } from './objects/ModuleItemStatusUncheckedUpdateInput.schema';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './objects/ModuleItemStatusWhereUniqueInput.schema';

export const ModuleItemStatusUpdateOneSchema = z.object({
  select: ModuleItemStatusSelectObjectSchema.optional(),
  include: ModuleItemStatusIncludeObjectSchema.optional(),
  data: z.union([
    ModuleItemStatusUpdateInputObjectSchema,
    ModuleItemStatusUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleItemStatusWhereUniqueInputObjectSchema,
});
