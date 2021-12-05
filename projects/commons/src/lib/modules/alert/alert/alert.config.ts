import { AlertType } from '../alert'

export const ALERT_CLS_CONFIG: Record<AlertType, string> = {
    'default': 'bg-gray-100 text-gray-800',
    'success': 'bg-green-300 text-gray-800',
    'error': 'bg-red-500 text-white'
}

export const ALERT_ANIM_DELAY = 200
export const ALERT_EXIT_IN = 2000
