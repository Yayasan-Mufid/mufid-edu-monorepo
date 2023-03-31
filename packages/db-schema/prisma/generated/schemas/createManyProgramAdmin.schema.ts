import { z } from 'zod';
import { ProgramAdminCreateManyInputObjectSchema } from './objects/ProgramAdminCreateManyInput.schema';

export const ProgramAdminCreateManySchema = z.object({
  data: z.union([
    ProgramAdminCreateManyInputObjectSchema,
    z.array(ProgramAdminCreateManyInputObjectSchema),
  ]),
});
