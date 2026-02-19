import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question.js";
import type { AnswerRepository } from "../repositories/answers-repository.js";
import type { Answer } from "../entities/answer.js";

const fakeAnswerRepostory: AnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepostory);
  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "2",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
