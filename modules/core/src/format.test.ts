import { formatText } from './format'

describe('formatText function', () => {
  test('Should replace parameters {n} with the following param index', () => {
    const result = formatText('Text {0} {1}', 'param1', 'param2')
    expect(result).toEqual('Text param1 param2')
  })

  test('Should replace repeated parameters with the same value of the following index', () => {
    const result = formatText('Text {0} {0} {1}', 'param1', 'param2')
    expect(result).toEqual('Text param1 param1 param2')
  })
})
