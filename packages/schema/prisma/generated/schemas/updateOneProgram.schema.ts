import { z } from 'zod';
import { ProgramSelectObjectSchema } from './objects/ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './objects/ProgramInclude.schema';
import { ProgramUpdateInputObjectSchema } from './objects/ProgramUpdateInput.schema';
import { ProgramUncheckedUpdateInputObjectSchema } from './objects/ProgramUncheckedUpdateInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';

export const ProgramUpdateOneSchema = z.object({
  select: ProgramSelectObjectSchema.optional(),
  include: ProgramIncludeObjectSchema.optional(),
  data: z.union([
    ProgramUpdateInputObjectSchema,
    ProgramUncheckedUpdateInputObjectSchema,
  ]),
  where: ProgramWhereUniqueInputObjectSchema,
});
