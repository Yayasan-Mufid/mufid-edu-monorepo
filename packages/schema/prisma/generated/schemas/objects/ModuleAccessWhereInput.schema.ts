import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleRelationFilterObjectSchema } from './ModuleRelationFilter.schema';
import { ModuleWhereInputObjectSchema } from './ModuleWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleAccessWhereInputObjectSchema),
        z.lazy(() => ModuleAccessWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleAccessWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleAccessWhereInputObjectSchema),
        z.lazy(() => ModuleAccessWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module: z
      .union([
        z.lazy(() => ModuleRelationFilterObjectSchema),
        z.lazy(() => ModuleWhereInputObjectSchema),
      ])
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
    granted_on: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ModuleAccessWhereInputObjectSchema = Schema;
