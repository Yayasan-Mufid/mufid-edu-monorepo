import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemCreateWithoutAttachmentsInput.schema';
import { ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema } from './ModuleItemUncheckedCreateWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutAttachmentsInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutAttachmentsInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedCreateWithoutAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemCreateOrConnectWithoutAttachmentsInputObjectSchema =
  Schema;
