import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleScalarWhereInputObjectSchema),
        z.lazy(() => ModuleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleScalarWhereInputObjectSchema),
        z.lazy(() => ModuleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    program_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    published: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    archived: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    cover_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ModuleScalarWhereInputObjectSchema = Schema;
