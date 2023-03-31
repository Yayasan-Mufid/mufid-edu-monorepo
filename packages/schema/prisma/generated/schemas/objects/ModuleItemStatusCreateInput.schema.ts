import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemCreateNestedOneWithoutUser_statusInput.schema';
import { UserCreateNestedOneWithoutModule_item_statusInputObjectSchema } from './UserCreateNestedOneWithoutModule_item_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateInput> = z
  .object({
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutModule_item_statusInputObjectSchema,
    ),
    status: z.string().optional(),
    updated_at: z.date().optional(),
  })
  .strict();

export const ModuleItemStatusCreateInputObjectSchema = Schema;
