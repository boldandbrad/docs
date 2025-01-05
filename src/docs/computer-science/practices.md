# Practices

## Naming Things

Naming things is difficult. As a rule of thumb, avoid creating unnecessary
abstractions to avoid coming up with more names.

- Do not use multiple names for the same thing. Passthrough values should be
  consistent.
- Use full words instead of abbreviations or single characters
- Acronyms are OK if they are very well known/ubiquitous
- Let the language typing do the work. Only include the variable's type in the
  name in untyped languages or in rare cases where it is not evident at a
  glance.
- Use common names for common actions: Example use create, read, update, and
  delete for CRUD functions
- Prefer semantic naming, with the following priority order
  1. what the purpose of it is, or what it does
  2. how it does it
- Singletons: prefix with `the`
- Value retrieved randomly from a given set: prefix with `any`
- Sets/Lists: plural form of the value/object
- Temporary/Local instance or value: prefix with `one`
