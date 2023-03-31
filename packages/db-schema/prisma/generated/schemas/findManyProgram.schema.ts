import { z } from 'zod';
import { ProgramSelectObjectSchema } from './objects/ProgramSelect.schema';
import { ProgramIncludeObjectSchema } from './objects/ProgramInclude.schema';
import { ProgramOrderByWithRelationInputObjectSchema } from './objects/ProgramOrderByWithRelationInput.schema';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';
import { ProgramScalarFieldEnumSchema } from './enums/ProgramScalarFieldEnum.schema';

export const ProgramFindManySchema = z.object({
  select: z.lazy(() => ProgramSelectObjectSchema.optional()),
  include: z.lazy(() => ProgramIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ProgramOrderByWithRelationInputObjectSchema,
      ProgramOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProgramWhereInputObjectSchema.optional(),
  cursor: ProgramWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProgramScalarFieldEnumSchema).optional(),
});
