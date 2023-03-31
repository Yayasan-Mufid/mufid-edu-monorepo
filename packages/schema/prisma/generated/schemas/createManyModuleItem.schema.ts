import { z } from 'zod';
import { ModuleItemCreateManyInputObjectSchema } from './objects/ModuleItemCreateManyInput.schema';

export const ModuleItemCreateManySchema = z.object({
  data: z.union([
    ModuleItemCreateManyInputObjectSchema,
    z.array(ModuleItemCreateManyInputObjectSchema),
  ]),
});
