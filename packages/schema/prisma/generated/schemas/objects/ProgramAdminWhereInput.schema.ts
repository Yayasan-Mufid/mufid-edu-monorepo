import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProgramRelationFilterObjectSchema } from './ProgramRelationFilter.schema';
import { ProgramWhereInputObjectSchema } from './ProgramWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProgramAdminWhereInputObjectSchema),
        z.lazy(() => ProgramAdminWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProgramAdminWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProgramAdminWhereInputObjectSchema),
        z.lazy(() => ProgramAdminWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    program_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program: z
      .union([
        z.lazy(() => ProgramRelationFilterObjectSchema),
        z.lazy(() => ProgramWhereInputObjectSchema),
      ])
      .optional(),
    assigned_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ProgramAdminWhereInputObjectSchema = Schema;
