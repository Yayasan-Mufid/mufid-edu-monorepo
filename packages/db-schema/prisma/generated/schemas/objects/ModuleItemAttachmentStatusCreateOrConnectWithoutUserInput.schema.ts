import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () => ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
