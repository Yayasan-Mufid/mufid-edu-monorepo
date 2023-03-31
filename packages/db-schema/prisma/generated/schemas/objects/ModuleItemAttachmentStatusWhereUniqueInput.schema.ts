import { z } from 'zod';
import { ModuleItemAttachmentStatusAttachment_idUser_idCompoundUniqueInputObjectSchema } from './ModuleItemAttachmentStatusAttachment_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusWhereUniqueInput> = z
  .object({
    attachment_id_user_id: z
      .lazy(
        () =>
          ModuleItemAttachmentStatusAttachment_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemAttachmentStatusWhereUniqueInputObjectSchema = Schema;
