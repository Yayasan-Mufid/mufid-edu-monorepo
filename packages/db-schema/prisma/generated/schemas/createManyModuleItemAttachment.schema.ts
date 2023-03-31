import { z } from 'zod';
import { ModuleItemAttachmentCreateManyInputObjectSchema } from './objects/ModuleItemAttachmentCreateManyInput.schema';

export const ModuleItemAttachmentCreateManySchema = z.object({
  data: z.union([
    ModuleItemAttachmentCreateManyInputObjectSchema,
    z.array(ModuleItemAttachmentCreateManyInputObjectSchema),
  ]),
});
