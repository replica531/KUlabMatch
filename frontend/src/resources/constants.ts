export const initialSurveyName = "京都大学工学部電気電子工学科"
export const initialSurveyYear = 2024

export const HOST =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ku-lab-match.herokuapp.com";

export const Grades = [
  { value: 0, label: 'その他' },
  { value: 1, label: 'B1' },
  { value: 2, label: 'B2' },
  { value: 3, label: 'B3' },
  { value: 4, label: 'B4' },
  { value: 5, label: 'M1' },
  { value: 6, label: 'M2' },
  { value: 7, label: 'D1' },
  { value: 8, label: 'D2' },
  { value: 9, label: 'D3' },
]

export const Affiliations = [
  { value: 0, label: 'その他' },
  { value: 1, label: '京都大学工学部電気電子工学科' },
]

export const VotePermissionLists = [
  {surveyName: '京都大学工学部電気電子工学科', permissions: [
    { affiliation: 1, grade: 3 },
  ]}
]
