type AwaitOfReturnType<T> = Readonly<
  { data: T; error: undefined } | { data: undefined; error: Error }
>;

export async function of<T>(promise: Promise<T>): Promise<AwaitOfReturnType<T>> {
  try {
    const data = await promise;

    return { data, error: undefined };
  } catch (error) {
    if (!error) {
      return { data: undefined, error: new Error('Rejection with empty value') };
    }

    return { data: undefined, error };
  }
}
