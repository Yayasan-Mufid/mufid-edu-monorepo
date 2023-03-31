import { z } from 'zod';
import { ModuleItemAttachmentScalarWhereInputObjectSchema } from './ModuleItemAttachmentScalarWhereInput.schema';
import { ModuleItemAttachmentUpdateManyMutationInputObjectSchema } from './ModuleItemAttachmentUpdateManyMutationInput.schema';
import { ModuleItemAttachmentUncheckedUpdateManyWithoutAttachmentsInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateManyWithoutAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemAttachmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemAttachmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedUpdateManyWithoutAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentUpdateManyWithWhereWithoutModule_itemInputObjectSchema =
  Schema;
