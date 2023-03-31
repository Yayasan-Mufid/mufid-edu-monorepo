import { z } from 'zod';
import { ModuleCreateManyInputObjectSchema } from './objects/ModuleCreateManyInput.schema';

export const ModuleCreateManySchema = z.object({
  data: z.union([
    ModuleCreateManyInputObjectSchema,
    z.array(ModuleCreateManyInputObjectSchema),
  ]),
});
