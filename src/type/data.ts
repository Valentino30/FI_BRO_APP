export type DailyOpenClose = {
  status: string;
  from: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  afterHours: number;
  preMarket: number;
};

export type Result = {
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
};

export type Aggregated = {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: Result[];
  status: string;
  request_id: string;
  count: number;
  average: number;
};
