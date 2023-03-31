import { z } from 'zod';
import { ModuleItemAttachmentStatusWhereUniqueInputObjectSchema } from './ModuleItemAttachmentStatusWhereUniqueInput.schema';
import { ModuleItemAttachmentStatusUpdateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUpdateWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => ModuleItemAttachmentStatusUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
