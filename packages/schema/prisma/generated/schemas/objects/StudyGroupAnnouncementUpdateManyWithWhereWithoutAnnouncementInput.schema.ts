import { z } from 'zod';
import { StudyGroupAnnouncementScalarWhereInputObjectSchema } from './StudyGroupAnnouncementScalarWhereInput.schema';
import { StudyGroupAnnouncementUpdateManyMutationInputObjectSchema } from './StudyGroupAnnouncementUpdateManyMutationInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupsInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAnnouncementScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAnnouncementUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAnnouncementUpdateManyWithWhereWithoutAnnouncementInputObjectSchema =
  Schema;
