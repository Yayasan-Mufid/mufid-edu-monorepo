import { z } from 'zod';
import { ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemCreateNestedOneWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateWithoutUserInput> = z
  .object({
    module_item: z.lazy(
      () => ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema,
    ),
    status: z.string().optional(),
    updated_at: z.date().optional(),
  })
  .strict();

export const ModuleItemStatusCreateWithoutUserInputObjectSchema = Schema;
