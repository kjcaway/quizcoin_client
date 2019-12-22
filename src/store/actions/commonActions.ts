export const GO_TO_URL = 'GO_TO_URL' as const;

export interface ActionType {
  type: string;
  payload: string;
}


export function goToUrl(payload: string){
  return {
    type: GO_TO_URL,
    payload
  }
}