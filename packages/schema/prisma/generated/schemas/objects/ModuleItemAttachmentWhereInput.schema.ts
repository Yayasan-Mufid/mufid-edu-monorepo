import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ModuleItemRelationFilterObjectSchema } from './ModuleItemRelationFilter.schema';
import { ModuleItemWhereInputObjectSchema } from './ModuleItemWhereInput.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ModuleItemAttachmentStatusListRelationFilterObjectSchema } from './ModuleItemAttachmentStatusListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema),
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ModuleItemAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema),
        z.lazy(() => ModuleItemAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    url: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    seq: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    mandatory: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    user_status: z
      .lazy(() => ModuleItemAttachmentStatusListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentWhereInputObjectSchema = Schema;
