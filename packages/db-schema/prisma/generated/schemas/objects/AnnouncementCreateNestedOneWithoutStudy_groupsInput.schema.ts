import { z } from 'zod';
import { AnnouncementCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateWithoutStudy_groupsInput.schema';
import { AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema } from './AnnouncementUncheckedCreateWithoutStudy_groupsInput.schema';
import { AnnouncementCreateOrConnectWithoutStudy_groupsInputObjectSchema } from './AnnouncementCreateOrConnectWithoutStudy_groupsInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema } from './AnnouncementWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnnouncementCreateNestedOneWithoutStudy_groupsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AnnouncementCreateWithoutStudy_groupsInputObjectSchema),
          z.lazy(
            () =>
              AnnouncementUncheckedCreateWithoutStudy_groupsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => AnnouncementCreateOrConnectWithoutStudy_groupsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => AnnouncementWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const AnnouncementCreateNestedOneWithoutStudy_groupsInputObjectSchema =
  Schema;
