import { z } from 'zod';
import { ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUpsertWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUpsertWithoutUser_statusInput.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';
import { ModuleItemAttachmentUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUpdateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentUpdateOneRequiredWithoutUser_statusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ModuleItemAttachmentCreateOrConnectWithoutUser_statusInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => ModuleItemAttachmentUpsertWithoutUser_statusInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ModuleItemAttachmentUpdateWithoutUser_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              ModuleItemAttachmentUncheckedUpdateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema =
  Schema;
