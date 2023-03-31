import { z } from 'zod';
import { ModuleItemStatusCreateManyInputObjectSchema } from './objects/ModuleItemStatusCreateManyInput.schema';

export const ModuleItemStatusCreateManySchema = z.object({
  data: z.union([
    ModuleItemStatusCreateManyInputObjectSchema,
    z.array(ModuleItemStatusCreateManyInputObjectSchema),
  ]),
});
