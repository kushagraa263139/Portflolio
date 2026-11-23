export type ErrorOptions = {
  boundary?: string;
  componentStack?: string;
};

export function reportError(
  error: unknown,
  options?: ErrorOptions,
): void {
  if (import.meta.env.DEV) {
    console.error(`[Error${options?.boundary ? ` @ ${options.boundary}` : ""}]:`, error);
  }
}
