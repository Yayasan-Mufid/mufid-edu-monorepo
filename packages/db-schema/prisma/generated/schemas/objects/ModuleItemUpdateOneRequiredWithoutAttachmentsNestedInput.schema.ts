import { z } from 'zod';
import { ModuleItemCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedCreateWithoutAttachmentsInput.schema';
import { ModuleItemCreateOrConnectWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateOrConnectWithoutAttachmentsInput.schema';
import { ModuleItemUpsertWithoutAttachmentsInputObjectSchema } from './ModuleItemUpsertWithoutAttachmentsInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutAttachmentsInputObjectSchema } from './ModuleItemUpdateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateOneRequiredWithoutAttachmentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutAttachmentsInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ModuleItemCreateOrConnectWithoutAttachmentsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ModuleItemUpsertWithoutAttachmentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleItemUpdateWithoutAttachmentsInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedUpdateWithoutAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema =
  Schema;
