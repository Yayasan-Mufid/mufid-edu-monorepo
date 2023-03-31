import { z } from 'zod';
import { ProgramSelectObjectSchema } from './objects/ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './objects/ProgramInclude.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';

export const ProgramFindUniqueSchema = z.object({
  select: ProgramSelectObjectSchema.optional(),
  include: ProgramIncludeObjectSchema.optional(),
  where: ProgramWhereUniqueInputObjectSchema,
});
