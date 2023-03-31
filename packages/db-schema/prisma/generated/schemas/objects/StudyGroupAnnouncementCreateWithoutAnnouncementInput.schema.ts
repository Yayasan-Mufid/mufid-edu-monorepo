import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutAnnouncementsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutAnnouncementsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateWithoutAnnouncementInput> =
  z
    .object({
      study_group: z.lazy(
        () => StudyGroupCreateNestedOneWithoutAnnouncementsInputObjectSchema,
      ),
    })
    .strict();

export const StudyGroupAnnouncementCreateWithoutAnnouncementInputObjectSchema =
  Schema;
