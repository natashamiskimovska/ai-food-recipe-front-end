export interface IPayload<T> {
    data: T;
    meta: {
      code: number;
      message: string;
      paginate: {
        limit: number;
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };
  }