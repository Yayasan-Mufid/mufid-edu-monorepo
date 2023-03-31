import { z } from 'zod';
import { ModuleItemAttachmentCreateNestedOneWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateNestedOneWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusCreateWithoutUserInput> =
  z
    .object({
      status: z.string().optional(),
      updated_at: z.date().optional(),
      attachment: z.lazy(
        () =>
          ModuleItemAttachmentCreateNestedOneWithoutUser_statusInputObjectSchema,
      ),
    })
    .strict();

export const ModuleItemAttachmentStatusCreateWithoutUserInputObjectSchema =
  Schema;
