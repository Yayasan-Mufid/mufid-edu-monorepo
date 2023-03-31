import { z } from 'zod';
import { AnnouncementCreateNestedOneWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateNestedOneWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateWithoutStudy_groupInput> =
  z
    .object({
      announcement: z.lazy(
        () => AnnouncementCreateNestedOneWithoutStudy_groupsInputObjectSchema,
      ),
    })
    .strict();

export const StudyGroupAnnouncementCreateWithoutStudy_groupInputObjectSchema =
  Schema;
