import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () => ModuleItemAttachmentStatusUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
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

export const ModuleItemAttachmentStatusUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
