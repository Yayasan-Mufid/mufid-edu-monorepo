import { z } from 'zod';
import { UserCreateNestedOneWithoutModule_item_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateWithoutModule_itemInput> =
  z
    .object({
      user: z.lazy(
        () => UserCreateNestedOneWithoutModule_item_statusInputObjectSchema,
      ),
      status: z.string().optional(),
      updated_at: z.date().optional(),
    })
    .strict();

export const ModuleItemStatusCreateWithoutModule_itemInputObjectSchema = Schema;
