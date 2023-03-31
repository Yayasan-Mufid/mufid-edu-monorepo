import { z } from 'zod';
import { ModuleAccessCreateManyInputObjectSchema } from './objects/ModuleAccessCreateManyInput.schema';

export const ModuleAccessCreateManySchema = z.object({
  data: z.union([
    ModuleAccessCreateManyInputObjectSchema,
    z.array(ModuleAccessCreateManyInputObjectSchema),
  ]),
});
