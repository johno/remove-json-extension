import test from 'ava'
import removeJsonExtension from './'

test('remove-json-extension does something awesome', t => {
  t.plan(1)

  t.true(removeJsonExtension())
})
