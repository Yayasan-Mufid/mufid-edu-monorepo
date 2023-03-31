import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    module_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    parent_item_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    is_root: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    is_quiz: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mandatory: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
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

export const ModuleItemScalarWhereInputObjectSchema = Schema;
