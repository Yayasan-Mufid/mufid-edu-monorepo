import { z } from 'zod';
import { ModuleItemAttachmentUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUpdateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpsertWithoutUser_statusInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => ModuleItemAttachmentUpdateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemAttachmentUpsertWithoutUser_statusInputObjectSchema =
  Schema;
