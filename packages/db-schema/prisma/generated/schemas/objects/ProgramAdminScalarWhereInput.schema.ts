import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProgramAdminScalarWhereInputObjectSchema),
        z.lazy(() => ProgramAdminScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProgramAdminScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProgramAdminScalarWhereInputObjectSchema),
        z.lazy(() => ProgramAdminScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    assigned_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ProgramAdminScalarWhereInputObjectSchema = Schema;
