import Noty from 'noty';

const TIMEOUT = 5000;

export function showNotification(type: any, text: string, timeout = TIMEOUT) {
  new Noty({
    theme: 'nest',
    layout: 'topRight',
    type: type,
    text: text,
    progressBar: true,
    timeout: timeout,
  }).show();
}

export function showSuccessNotification(text: string, timeout = TIMEOUT) {
  showNotification('success', text, timeout);
}

export function showErrorNotification(text: string, timeout = TIMEOUT) {
  showNotification('error', text, timeout);
}
