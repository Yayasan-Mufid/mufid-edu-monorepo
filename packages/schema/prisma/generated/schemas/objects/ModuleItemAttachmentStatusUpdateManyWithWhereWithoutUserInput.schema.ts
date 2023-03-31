import { z } from 'zod';
import { ModuleItemAttachmentStatusScalarWhereInputObjectSchema } from './ModuleItemAttachmentStatusScalarWhereInput.schema';
import { ModuleItemAttachmentStatusUpdateManyMutationInputObjectSchema } from './ModuleItemAttachmentStatusUpdateManyMutationInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateManyWithoutModule_item_attachment_statusInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateManyWithoutModule_item_attachment_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInput> =
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
            ModuleItemAttachmentStatusUncheckedUpdateManyWithoutModule_item_attachment_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
