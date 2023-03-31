import { z } from 'zod';
import { StudyGroupAnnouncementCreateManyStudy_groupInputObjectSchema } from './StudyGroupAnnouncementCreateManyStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateManyStudy_groupInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => StudyGroupAnnouncementCreateManyStudy_groupInputObjectSchema,
        ),
        z
          .lazy(
            () => StudyGroupAnnouncementCreateManyStudy_groupInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupAnnouncementCreateManyStudy_groupInputEnvelopeObjectSchema =
  Schema;
