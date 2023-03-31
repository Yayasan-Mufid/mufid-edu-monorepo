import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateOrConnectWithoutAttachmentInputObjectSchema =
  Schema;
