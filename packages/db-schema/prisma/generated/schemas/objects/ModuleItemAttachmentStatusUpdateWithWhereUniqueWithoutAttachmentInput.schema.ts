import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithoutAttachmentInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUpdateWithoutAttachmentInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateWithoutAttachmentInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutAttachmentInputObjectSchema =
  Schema;
