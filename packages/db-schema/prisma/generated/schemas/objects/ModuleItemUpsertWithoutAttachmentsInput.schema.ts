import { z } from 'zod';
import { ModuleItemUpdateWithoutAttachmentsInputObjectSchema } from './ModuleItemUpdateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutAttachmentsInput.schema';
import { ModuleItemCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedCreateWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithoutAttachmentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleItemUpdateWithoutAttachmentsInputObjectSchema),
      z.lazy(
        () => ModuleItemUncheckedUpdateWithoutAttachmentsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutAttachmentsInputObjectSchema),
      z.lazy(
        () => ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ModuleItemUpsertWithoutAttachmentsInputObjectSchema = Schema;
