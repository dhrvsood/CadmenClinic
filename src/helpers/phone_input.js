import { PatternFormat } from 'react-number-format'

export const PhoneInput = ({ field }) => (
  <PatternFormat
    {...field}
    className='block w-full rounded border border-gray-300 bg-white py-3'
    format='(###) ###-####'
    mask='_'
    required
  />
)
