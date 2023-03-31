import { z } from 'zod';
import { ProgramSelectObjectSchema } from './objects/ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './objects/ProgramInclude.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';
import { ProgramCreateInputObjectSchema } from './objects/ProgramCreateInput.schema';
import { ProgramUncheckedCreateInputObjectSchema } from './objects/ProgramUncheckedCreateInput.schema';
import { ProgramUpdateInputObjectSchema } from './objects/ProgramUpdateInput.schema';
import { ProgramUncheckedUpdateInputObjectSchema } from './objects/ProgramUncheckedUpdateInput.schema';

export const ProgramUpsertSchema = z.object({
  select: ProgramSelectObjectSchema.optional(),
  include: ProgramIncludeObjectSchema.optional(),
  where: ProgramWhereUniqueInputObjectSchema,
  create: z.union([
    ProgramCreateInputObjectSchema,
    ProgramUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProgramUpdateInputObjectSchema,
    ProgramUncheckedUpdateInputObjectSchema,
  ]),
});
