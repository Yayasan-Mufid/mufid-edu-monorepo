import { z } from 'zod';
import { UserUpdateOneRequiredWithoutModule_item_attachment_statusNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutModule_item_attachment_statusNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateWithoutAttachmentInput> =
  z
    .object({
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutModule_item_attachment_statusNestedInputObjectSchema,
        )
        .optional(),
      status: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updated_at: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateWithoutAttachmentInputObjectSchema =
  Schema;
