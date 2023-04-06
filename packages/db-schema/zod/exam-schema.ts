import type {
  Exam,
  ExamSection,
  Question,
  QuestionChoice,
} from "@prisma/client";
import { z } from "zod";
import { toZod } from "tozod";

export const ExamSchema: toZod<Exam> = z.object({
  code: z.string(),
  id: z.string(),
  module_id: z.string(),
  rules: z.string(),
  title: z.string(),
});

export const ExamSectionSchema: toZod<ExamSection> = z.object({
  default_point: z.number(),
  exam_id: z.string(),
  id: z.string(),
  nb_of_questions: z.number().int(),
  randomize_questions: z.boolean(),
  seq: z.number().int(),
  text: z.string(),
  title: z.string(),
  weight: z.number(),
});

export const QuestionSchema: toZod<Question> = z.object({
  created_at: z.date(),
  created_by_id: z.string(),
  grading_hint: z.string().nullable(),
  id: z.string(),
  max_score: z.number(),
  module_id: z.string().nullable(),
  program_id: z.string().nullable(),
  randomize_choices: z.boolean(),
  text: z.string(),
  type: z.string(),
  validated_at: z.date().nullable(),
  validated_by_id: z.string().nullable(),
  validator_note: z.string().nullable(),
});

export const QuestionChoiceSchema: toZod<QuestionChoice> = z.object({
  answer_key: z.boolean(),
  id: z.string(),
  question_id: z.string(),
  text: z.string(),
  seq: z.number().int(),
});
