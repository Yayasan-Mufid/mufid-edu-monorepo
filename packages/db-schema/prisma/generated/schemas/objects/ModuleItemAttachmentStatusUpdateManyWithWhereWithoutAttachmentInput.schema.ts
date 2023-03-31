import { z } from 'zod';
import { ModuleItemAttachmentStatusScalarWhereInputObjectSchema } from './ModuleItemAttachmentStatusScalarWhereInput.schema';
import { ModuleItemAttachmentStatusUpdateManyMutationInputObjectSchema } from './ModuleItemAttachmentStatusUpdateManyMutationInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInput> =
  z
    .object({
      where: z.lazy(
        () => ModuleItemAttachmentStatusScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => ModuleItemAttachmentStatusUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateManyWithWhereWithoutAttachmentInputObjectSchema =
  Schema;
