import { z } from "zod";

export const basicModuleItemaAttachmentSchema = {
  description: z.string(),
  type: z.string(),
  url: z.string().url(),
  seq: z.number(),
  mandatory: z.boolean(),
};

export const basicModuleItemAttachment = z.object(
  basicModuleItemaAttachmentSchema
);

export type BasicModuleItemAttachment = z.infer<
  typeof basicModuleItemAttachment
>;

export const editBasicModuleItemAttachmentSchema = {
  ...basicModuleItemaAttachmentSchema,
  id: z.string(),
};

export const editBasicModuleItemAttachment = z.object(
  editBasicModuleItemAttachmentSchema
);

export type EditBasicModuleItemAttachment = z.infer<
  typeof editBasicModuleItemAttachment
>;

export const basicModuleItemSchema = {
  title: z.string(),
  code: z.string(),
  text: z.string(),
  seq: z.number(),
  mandatory: z.boolean(),
  cover_img_url: z.string().url().nullable().optional(),
  bg_img_url: z.string().url().nullable().optional(),
};

export const createModuleItemSchema = {
  ...basicModuleItemSchema,
  module_id: z.string(),
  parent_item_id: z.string().optional(),
  is_root: z.boolean().optional(),
  attachments: z.array(basicModuleItemAttachment).optional(),
};

export const editModuleItemSchema = {
  ...basicModuleItemSchema,
  id: z.string(),
  attachments: z.array(
    basicModuleItemAttachment.or(editBasicModuleItemAttachment)
  ),
};
