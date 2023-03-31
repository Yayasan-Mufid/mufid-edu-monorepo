import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleItemRelationFilterObjectSchema } from './ModuleItemRelationFilter.schema';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemStatusWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemStatusWhereInputObjectSchema),
        z.lazy(() => ModuleItemStatusWhereInputObjectSchema).array(),
      ])
      .optional(),
    module_item_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_item: z
      .union([
        z.lazy(() => ModuleItemRelationFilterObjectSchema),
        z.lazy(() => ModuleItemWhereInputObjectSchema),
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
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ModuleItemStatusWhereInputObjectSchema = Schema;
