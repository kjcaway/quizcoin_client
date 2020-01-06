export const GO_TO_URL = 'GO_TO_URL' as const;

export const OPEN_CONFIRM_MODAL = 'OPEN_CONFIRM_MODAL' as const;
export const CLOSE_CONFIRM_MODAL = 'CLOSE_CONFIRM_MODAL' as const;

export const OK_CONFIRM_MODAL = 'OK_CONFIRM_MODAL' as const;
export const CANCEL_CONFIRM_MODAL = 'CLOSE_CONFIRM_MODAL' as const;

export interface ConfirmModalPayload {
  title: string;
  contents?: string;
}

export interface ActionType {
  type: string;
  payload: string & ConfirmModalPayload;
}


export function goToUrl(payload: string) {
  return {
    type: GO_TO_URL,
    payload
  }
}

export function openConfirmModal(payload: ConfirmModalPayload){
  return {
    type: OPEN_CONFIRM_MODAL,
    payload
  }
}

export function closeConfirmModal(){
  return {
    type: CLOSE_CONFIRM_MODAL,
  }
}

export function okConfirmModal(){
  return {
    type: OK_CONFIRM_MODAL
  }
}

export function cancelConfirmModal(){
  return {
    type: CANCEL_CONFIRM_MODAL
  }
}