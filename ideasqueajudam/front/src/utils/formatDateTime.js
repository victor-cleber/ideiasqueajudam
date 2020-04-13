import moment from 'moment'
import 'moment/locale/pt-br'

export const formatDateTime = dateISO => {
  const date = moment()
  date.locale('pt-BR')
  return date.format('LL')
}
