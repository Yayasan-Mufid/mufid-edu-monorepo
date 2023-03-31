import { z } from 'zod';
import { StudyGroupAnnouncementCreateManyAnnouncementInputObjectSchema } from './StudyGroupAnnouncementCreateManyAnnouncementInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementCreateManyAnnouncementInputEnvelope> =
  z
    .object({
      data: z
        .lazy(
          () => StudyGroupAnnouncementCreateManyAnnouncementInputObjectSchema,
        )
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupAnnouncementCreateManyAnnouncementInputEnvelopeObjectSchema =
  Schema;
