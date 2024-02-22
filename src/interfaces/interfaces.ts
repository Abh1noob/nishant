export interface GetDropper {
  statusCode: number;
  body: string
  headers: object;
}

export interface BodyResponse {
    name?: string;
    location?: string;
    user_id?: string;
    timestamp?: string;
    category?: string;
    type?: string;
}
