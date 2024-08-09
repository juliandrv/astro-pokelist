export interface PokeListResponse {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}