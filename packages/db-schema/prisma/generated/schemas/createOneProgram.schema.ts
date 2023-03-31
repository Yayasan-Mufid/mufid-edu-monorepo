import { z } from 'zod';
import { ProgramSelectObjectSchema } from './objects/ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './objects/ProgramInclude.schema';
import { ProgramCreateInputObjectSchema } from './objects/ProgramCreateInput.schema';
import { ProgramUncheckedCreateInputObjectSchema } from './objects/ProgramUncheckedCreateInput.schema';

export const ProgramCreateOneSchema = z.object({
  select: ProgramSelectObjectSchema.optional(),
  include: ProgramIncludeObjectSchema.optional(),
  data: z.union([
    ProgramCreateInputObjectSchema,
    ProgramUncheckedCreateInputObjectSchema,
  ]),
});
