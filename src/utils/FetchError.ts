export interface ResponseDataText {
  type: "plain";
  body: string;
}

export class FetchError extends Error {
  public name: "FetchError";
  public status: number;

  public static async from(response: Response) {
    const textResponse = await response.text();

    const parsedResponse = JSON.parse(textResponse);

    const obj = new FetchError(response);

    return { ...obj, data: parsedResponse };
  }

  constructor(response: Response) {
    super(
      `Fetch Error: Falha ao requisitar "${response.url}" com status "${response.status}".`
    );

    this.name = "FetchError";
    this.status = response.status;
  }
}
