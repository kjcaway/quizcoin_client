export const PUSH_MESSAGE = 'PUSH_MESSAGE' as const;
export const HIDE_MESSAGE = 'HIDE_MESSAGE' as const;

interface AlertMessagePayload {
  message: string;
  category: string;
}

export interface AlertMessageAction {
  type: string;
  payload: AlertMessagePayload;
}

export function pushMessage(payload: AlertMessagePayload) {
  return {
    type: PUSH_MESSAGE,
    payload
  }
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE,
  }
}