import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProgramUpdateOneRequiredWithoutModulesNestedInputObjectSchema } from './ProgramUpdateOneRequiredWithoutModulesNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ModuleAdminUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleAdminUpdateManyWithoutModuleNestedInput.schema';
import { ModuleItemUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleItemUpdateManyWithoutModuleNestedInput.schema';
import { ModuleAccessUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleAccessUpdateManyWithoutModuleNestedInput.schema';
import { StudyGroupUpdateManyWithoutModuleNestedInputObjectSchema } from './StudyGroupUpdateManyWithoutModuleNestedInput.schema';
import { ExamUpdateManyWithoutModuleNestedInputObjectSchema } from './ExamUpdateManyWithoutModuleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUpdateWithoutQuestionsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    program: z
      .lazy(() => ProgramUpdateOneRequiredWithoutModulesNestedInputObjectSchema)
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    slug: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    published: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    archived: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seq: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cover_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    admins: z
      .lazy(() => ModuleAdminUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => ModuleItemUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
    students: z
      .lazy(() => ModuleAccessUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
    study_groups: z
      .lazy(() => StudyGroupUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
    exams: z
      .lazy(() => ExamUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleUpdateWithoutQuestionsInputObjectSchema = Schema;
