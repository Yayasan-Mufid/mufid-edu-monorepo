import { z } from 'zod';
import { ModuleItemAttachmentCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemAttachmentCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemAttachmentCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemAttachmentWhereUniqueInputObjectSchema } from './ModuleItemAttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentCreateNestedOneWithoutUser_statusInput> =
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
      connect: z
        .lazy(() => ModuleItemAttachmentWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentCreateNestedOneWithoutUser_statusInputObjectSchema =
  Schema;
