import { z } from 'zod';
import { ModuleItemAttachmentStatusCreateManyInputObjectSchema } from './objects/ModuleItemAttachmentStatusCreateManyInput.schema';

export const ModuleItemAttachmentStatusCreateManySchema = z.object({
  data: z.union([
    ModuleItemAttachmentStatusCreateManyInputObjectSchema,
    z.array(ModuleItemAttachmentStatusCreateManyInputObjectSchema),
  ]),
});
