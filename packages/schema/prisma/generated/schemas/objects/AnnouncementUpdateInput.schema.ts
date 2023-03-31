import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreated_announcementsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCreated_announcementsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { StudyGroupAnnouncementUpdateManyWithoutAnnouncementNestedInputObjectSchema } from './StudyGroupAnnouncementUpdateManyWithoutAnnouncementNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_by: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutCreated_announcementsNestedInputObjectSchema,
      )
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    text: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    start_date: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    end_date: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    public: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    study_groups: z
      .lazy(
        () =>
          StudyGroupAnnouncementUpdateManyWithoutAnnouncementNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnnouncementUpdateInputObjectSchema = Schema;
