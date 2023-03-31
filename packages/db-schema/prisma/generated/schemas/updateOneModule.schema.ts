import { z } from 'zod';
import { ModuleSelectObjectSchema } from './objects/ModuleSelect.schema';
import { ModuleIncludeObjectSchema } from './objects/ModuleInclude.schema';
import { ModuleUpdateInputObjectSchema } from './objects/ModuleUpdateInput.schema';
import { ModuleUncheckedUpdateInputObjectSchema } from './objects/ModuleUncheckedUpdateInput.schema';
import { ModuleWhereUniqueInputObjectSchema } from './objects/ModuleWhereUniqueInput.schema';

export const ModuleUpdateOneSchema = z.object({
  select: ModuleSelectObjectSchema.optional(),
  include: ModuleIncludeObjectSchema.optional(),
  data: z.union([
    ModuleUpdateInputObjectSchema,
    ModuleUncheckedUpdateInputObjectSchema,
  ]),
  where: ModuleWhereUniqueInputObjectSchema,
});
