import { AnswerId, IQuestion, PlanStepId, QuestionId } from './Types';

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : IQuestion[] = [
    {
        id: QuestionId.AreYouRegistered,
        dotNavStep: 1,
        nextQuestionId: (answer) => QuestionId.OverseasMilitary,
        answers: [
            AnswerId.EmphaticYes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.No || answer === AnswerId.DontKnow ? PlanStepId.Register : undefined,
    },
    {
        id: QuestionId.OverseasMilitary,
        dotNavStep: 2,
        nextQuestionId: (answer) => answer === AnswerId.Yes ? QuestionId.FamiliarWithBallot : QuestionId.VoteByMailState,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => undefined,        // TODO: Fill in
    },
    {
        id: QuestionId.VoteByMailState,
        dotNavStep: 3,
        nextQuestionId: (key) => key === AnswerId.OtherState ? QuestionId.PollingLocation : QuestionId.ReceivedBallot,
        answers: [
            AnswerId.Colorado,
            AnswerId.Oregon,
            AnswerId.Washington,
            AnswerId.OtherState,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    /* VOTE-IN-PERSON PATH */
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 4,
        nextQuestionId: (key) => key === AnswerId.Yes ? QuestionId.ReceivedBallot : QuestionId.VoteByMailState,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.MissWork,
        answers: [
            AnswerId.DriveMyself,
            AnswerId.Carpool,
            AnswerId.RideShare,
            AnswerId.Taxi,
            AnswerId.Transit,
            AnswerId.Walk,
            AnswerId.Bike,
            AnswerId.Other,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    /* VOTE-BY-MAIL PATH */
    {
        id: QuestionId.ReceivedBallot,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.Deadline,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.HaveBallot : PlanStepId.NoBallotYet,
    },
    {
        id: QuestionId.Deadline,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.ReturnMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.KnowDeadline : PlanStepId.DontKnowDeadline,
    },
    {
        id: QuestionId.ReturnMethod,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Mail,
            AnswerId.BallotBox,
        ],
        resultingPlanStep: (answer) => /*answer === AnswerId.BallotBox ? PlanStepId.LocateBallotBox :*/ undefined,
    },
    /* REJOINED PATH */
    {
        id: QuestionId.FamiliarWithBallot,
        dotNavStep: 9,
        nextQuestionId: (key) => QuestionId.PeopleToInvite,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => /*answer === AnswerId.No ? PlanStepId.Research :*/ undefined,
    },
    {
        id: QuestionId.PeopleToInvite,
        dotNavStep: 10,
        nextQuestionId: (key) => QuestionId.ReasonToVote,
        answers: [
            AnswerId.Friends,
            AnswerId.FamilyMembers,
            AnswerId.Coworkers,
            AnswerId.Alone,
        ],
        resultingPlanStep: (answer) => /*answer === AnswerId.Friends ? PlanStepId.InviteFriends :*/ undefined,
    },
    {
        id: QuestionId.ReasonToVote,
        dotNavStep: 11,
        nextQuestionId: (key) => QuestionId.Emotion,
        answers: [
            AnswerId.Kids,
            AnswerId.Privilege,
            AnswerId.Change,
            AnswerId.Habit,
            AnswerId.Other,
        ],
        resultingPlanStep: (answer) => undefined,
    },
    {
        id: QuestionId.Emotion,
        dotNavStep: 12,
        nextQuestionId: (key) => undefined,
        answers: [
            AnswerId.Excited,
            AnswerId.Concerned,
            AnswerId.Shocked,
            AnswerId.Angry,
            AnswerId.Meh,
        ],
        resultingPlanStep: (answer) => undefined,
    }];

export const PLAN_DOT_NAV_STEP = 13;