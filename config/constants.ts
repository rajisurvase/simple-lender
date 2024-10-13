export const MAX_SIZE_FILE=2000000;

export const loginAccessTokenCookieName = "simple-lender-token"


enum IPeriodType  {
    YAER = "Year",
    MONTHLY="Monthly",
    WEEKLY= "Weekly",
    DAYS="Days"
}


export const PERIODS = [
    {
      id: 1,
      name: IPeriodType?.YAER,
      value: 1
    },
    {
      id: 2,
      name: IPeriodType?.MONTHLY,
      value: 12
    },
    {
      id: 3,
      name:IPeriodType?.WEEKLY,
      value: 52
    },
    {
      id: 4,
      name: IPeriodType?.DAYS,
      value: 365
    }
  ]
