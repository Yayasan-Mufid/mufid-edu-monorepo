import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUpdateWithoutAttachmentInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInputObjectSchema,
        ),
      ]),
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

export const ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutAttachmentInputObjectSchema =
  Schema;
