import test from 'ava'
import removeJsonExtension from './'

const jsonFiles = [
  'foo/bar.json',
  'foo/bar.JSON',
  'foo/bar.Json',
  'foo/bar'
]

test('removes json extensions', t => {
  t.plan(jsonFiles.length)

  jsonFiles.forEach(jsonFile => {
    t.is(removeJsonExtension(jsonFile), 'foo/bar')
  })
})
