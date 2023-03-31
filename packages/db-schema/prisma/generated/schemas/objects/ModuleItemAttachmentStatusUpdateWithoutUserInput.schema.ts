import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModuleItemAttachmentUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema } from './ModuleItemAttachmentUpdateOneRequiredWithoutUser_statusNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAttachmentStatusUpdateWithoutUserInput> =
  z
    .object({
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
      attachment: z
        .lazy(
          () =>
            ModuleItemAttachmentUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ModuleItemAttachmentStatusUpdateWithoutUserInputObjectSchema =
  Schema;
