import { z } from 'zod';
import { ModuleItemCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedCreateWithoutAttachmentsInput.schema';
import { ModuleItemCreateOrConnectWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateOrConnectWithoutAttachmentsInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedOneWithoutAttachmentsInput> =
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
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ModuleItemCreateNestedOneWithoutAttachmentsInputObjectSchema =
  Schema;
